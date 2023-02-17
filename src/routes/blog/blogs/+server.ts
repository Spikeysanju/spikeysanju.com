import { fetchBlogsMarkdownPosts } from '$lib/utils/utils';
import type { RequestHandler } from './$types';
import type { Data } from '$lib/type/blog-metadata';

export const GET: RequestHandler = async () => {
	const allPosts = await fetchBlogsMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	}) satisfies Data[];

	return new Response(JSON.stringify(sortedPosts), {
		headers: {
			'Content-Type': 'application/json'
		},
		status: 200,
		statusText: 'OK'
	});
};
