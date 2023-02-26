import { f as fetchBlogsMarkdownPosts } from "../../../../chunks/utils.js";
const GET = async () => {
  const allPosts = await fetchBlogsMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
  return new Response(JSON.stringify(sortedPosts), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 200,
    statusText: "OK"
  });
};
export {
  GET
};
