import type { Data } from '$lib/type/blog-metadata';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/blogs`);
	const blogs = (await response.json()) as Data[];

	return {
		blogs: blogs
	};
}) satisfies PageServerLoad;
