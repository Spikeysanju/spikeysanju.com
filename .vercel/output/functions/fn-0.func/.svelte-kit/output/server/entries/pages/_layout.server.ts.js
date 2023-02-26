const load = async ({ locals, url }) => {
  return {
    session: await locals.getSession(),
    currentRoute: url.pathname
  };
};
export {
  load
};
