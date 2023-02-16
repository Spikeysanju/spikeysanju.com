import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/blogs`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post: { meta: { categories: string | string[]; }; }) => post.meta.categories.includes(category));

	return {
		category: category,
		posts: posts,
		params: params

	};
}) satisfies PageLoad;
