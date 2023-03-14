import { b as fetchProjectsMarkdownPosts } from "../../../../chunks/utils.js";
const GET = async () => {
  const allProjects = await fetchProjectsMarkdownPosts();
  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
  return new Response(JSON.stringify(sortedProjects), {
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
