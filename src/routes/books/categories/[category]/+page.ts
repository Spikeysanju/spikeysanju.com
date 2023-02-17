import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/books`);
	const allBooks = await response.json();

	const books = allBooks.filter((book: { meta: { categories: string | string[] } }) =>
		book.meta.categories.includes(category)
	);

	return {
		category: category,
		books: books,
		params: params
	};
}) satisfies PageLoad;
