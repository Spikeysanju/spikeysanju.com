const config = {
  runtime: "nodejs18.x"
};
const load = async ({ params }) => {
  return {
    params
  };
};
export {
  config,
  load
};
