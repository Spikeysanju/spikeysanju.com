import { c as fetchBlogPostBySlug } from "../../../../chunks/utils.js";
const config = {
  runtime: "nodejs18.x"
};
const GET = async () => {
  const post = await fetchBlogPostBySlug("impact-of-user-flow-in-startup");
  return new Response(JSON.stringify(post?.path), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 200,
    statusText: "OK"
  });
};
export {
  GET,
  config
};
