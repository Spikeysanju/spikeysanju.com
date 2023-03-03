const load = async ({ fetch, params }) => {
  const { category } = params;
  const response = await fetch(`/api/books`);
  const allBooks = await response.json();
  const books = allBooks.filter(
    (book) => book.meta.categories.includes(category)
  );
  return {
    category,
    books,
    params
  };
};
export {
  load
};
