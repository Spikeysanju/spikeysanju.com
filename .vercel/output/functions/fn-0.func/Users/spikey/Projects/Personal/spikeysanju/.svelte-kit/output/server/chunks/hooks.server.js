import { D as DEV } from "./prod-ssr.js";
import { d as private_env } from "./internal.js";
import { Auth } from "@auth/core";
import GitHub from "@auth/core/providers/github";
import { G as GITHUB_ID, a as GITHUB_SECRET } from "./private.js";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { p as prisma } from "./prisma.js";
const dev = DEV;
async function getSession(req, config) {
  config.secret ??= private_env.AUTH_SECRET;
  config.trustHost ??= true;
  const url = new URL("/api/auth/session", req.url);
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
function AuthHandle(prefix, authOptions) {
  return function({ event, resolve }) {
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
  const { prefix = "/auth", ...authOptions } = options;
  authOptions.secret ??= private_env.AUTH_SECRET;
  authOptions.trustHost ??= !!(private_env.AUTH_TRUST_HOST ?? private_env.VERCEL ?? dev);
  return AuthHandle(prefix, authOptions);
}
const handle = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  trustHost: true,
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "database",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60,
    // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60,
    // 24 hours
    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return crypto.randomUUID();
    }
  }
});
export {
  handle
};
