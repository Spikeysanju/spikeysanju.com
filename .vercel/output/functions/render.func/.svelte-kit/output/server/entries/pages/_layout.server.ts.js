const load = async ({ locals, url, fetch }) => {
  await fetch("https://api.spikeysanju.com/lastvisit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const lastVisit = await fetch("https://api.spikeysanju.com/lastvisit", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json());
  return {
    session: await locals.getSession(),
    currentRoute: url.pathname,
    lastVisit
  };
};
export {
  load
};
