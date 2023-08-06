import { d as dev } from "./environment.js";
import { d as private_env } from "./internal.js";
import { Auth } from "@auth/core";
import GitHub from "@auth/core/providers/github";
import { f as AUTH_SECRET, G as GITHUB_ID, g as GITHUB_SECRET } from "./private.js";
import { p as prisma } from "./prisma.js";
import { PrismaAdapter } from "@auth/prisma-adapter";
async function getSession(req, config) {
  config.secret ??= private_env.AUTH_SECRET;
  config.trustHost ??= true;
  const prefix = config.prefix ?? "/auth";
  const url = new URL(prefix + "/session", req.url);
  const request = new Request(url, { headers: req.headers });
  const response = await Auth(request, config);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}
const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AuthHandle(svelteKitAuthOptions) {
  return async function({ event, resolve }) {
    const authOptions = typeof svelteKitAuthOptions === "object" ? svelteKitAuthOptions : await svelteKitAuthOptions(event);
    const { prefix = "/auth" } = authOptions;
    const { url, request } = event;
    event.locals.getSession ??= () => getSession(request, authOptions);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/")) {
      return resolve(event);
    }
    return Auth(request, authOptions);
  };
}
function SvelteKitAuth(options) {
  if (typeof options === "object") {
    options.secret ??= private_env.AUTH_SECRET;
    options.trustHost ??= !!(private_env.AUTH_TRUST_HOST ?? private_env.VERCEL ?? dev);
  }
  return AuthHandle(options);
}
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const handleAuth = SvelteKitAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  secret: AUTH_SECRET,
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
});
const saveUserToLocal = async ({ event, resolve }) => {
  const session = await event.locals.getSession();
  if (!session) {
    return resolve(event);
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email
    }
  });
  if (!user) {
    return resolve(event);
  }
  event.locals.user = user;
  const response = await resolve(event);
  return response;
};
const pageLoadSpeed = async ({ event, resolve }) => {
  const route = event.url;
  const start = performance.now();
  const response = await resolve(event);
  const end = performance.now();
  const responseTime = end - start;
  if (responseTime > 2e3) {
    console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`);
  }
  if (responseTime < 1e3) {
    console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`);
  }
  return response;
};
function handleError({ error, event }) {
  return {
    message: "Something went wrong"
  };
}
const handle = sequence(handleAuth, saveUserToLocal, pageLoadSpeed);
export {
  handle,
  handleAuth,
  handleError
};
