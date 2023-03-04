const load = async ({ fetch }) => {
  const response = await fetch(`/api/books`);
  const books = await response.json();
  const categories = [...new Set(books.map((book) => book.meta.categories).flat())];
  return {
    books,
    categories
  };
};
export {
  load
};
