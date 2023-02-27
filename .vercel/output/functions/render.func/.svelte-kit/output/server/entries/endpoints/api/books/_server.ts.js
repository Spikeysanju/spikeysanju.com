import { a as fetchBooksMarkdownPosts } from "../../../../chunks/utils.js";
const GET = async () => {
  const allBooks = await fetchBooksMarkdownPosts();
  const sortedBooks = allBooks.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
  return new Response(JSON.stringify(sortedBooks), {
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
