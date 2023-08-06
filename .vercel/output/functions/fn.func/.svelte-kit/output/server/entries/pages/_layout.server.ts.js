import { p as prisma } from "../../chunks/prisma.js";
const config = {
  runtime: "nodejs18.x"
};
const load = async (event) => {
  const session = await event.locals.getSession();
  const ip = event.getClientAddress();
  const city = decodeURIComponent(event.request.headers.get("x-vercel-ip-city") ?? "unknown");
  const country = decodeURIComponent(event.request.headers.get("x-vercel-ip-country") ?? "unknown");
  const user = session ? await prisma.user.findUnique({
    where: {
      email: session.user?.email
    }
  }) : null;
  return {
    session,
    currentUser: user,
    currentRoute: event.url.pathname,
    ip,
    city,
    country,
    now: (/* @__PURE__ */ new Date()).toISOString()
  };
};
export {
  config,
  load
};
