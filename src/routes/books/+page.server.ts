import type { Data } from '$lib/type/blog-metadata';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/books`);
	const books = (await response.json()) as Data[];

	// get all categories and remove duplicates
	const categories = [...new Set(books.map((book) => book.meta.categories).flat())];

	return {
		books: books,
		categories: categories
	};
}) satisfies PageServerLoad;
