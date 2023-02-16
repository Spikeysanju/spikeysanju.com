import type { Data } from '$lib/type/blog-metadata';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/blogs`);
	const blogs = (await response.json()) as Data[];
	// get all categories and remove duplicates
	const categories = [...new Set(blogs.map((blog) => blog.meta.categories).flat())];

	return {
		blogs: blogs,
		categories: categories
	};
}) satisfies PageServerLoad;
