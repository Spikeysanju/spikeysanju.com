const config = {
  runtime: "nodejs18.x"
};
const load = async ({ locals, url }) => {
  return {
    session: await locals.getSession(),
    currentRoute: url.pathname
  };
};
export {
  config,
  load
};
