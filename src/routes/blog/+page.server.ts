import type { Data } from '$lib/type/blog-metadata';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = (await response.json()) as Data[];

	return {
		posts: posts,
	};
}) satisfies PageServerLoad;
