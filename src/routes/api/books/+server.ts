import { fetchBooksMarkdownPosts } from '$lib/utils/utils';
import type { RequestHandler } from './$types';
import type { Data } from '$lib/type/blog-metadata';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};

export const GET: RequestHandler = async () => {
	const allBooks = await fetchBooksMarkdownPosts();

	const sortedBooks = allBooks.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	}) satisfies Data[];

	return new Response(JSON.stringify(sortedBooks), {
		headers: {
			'Content-Type': 'application/json'
		},
		status: 200,
		statusText: 'OK'
	});
};
