const PUT = async () => {
  const res = await fetch("https://api.spikeysanju.com/lastvisit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    statusText: "OK"
  });
};
export {
  PUT
};
