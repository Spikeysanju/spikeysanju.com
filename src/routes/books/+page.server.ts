import type { Data } from '$lib/type/blog-metadata';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/books`);
	const books = (await response.json()) as Data[];

	return {
		books: books
	};
}) satisfies PageServerLoad;
