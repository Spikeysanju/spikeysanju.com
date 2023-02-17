import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	console.log('blog params', params.slug);

	const path = `/src/lib/data/blogs/${params.slug}.md`;
	const blog = await import(path);
	const { title, date, author, image, categories } = blog.metadata;
	const content = blog.default;

	return {
		title: title,
		content: content,
		date: date,
		author: author,
		slug: params.slug,
		image: image,
		categories: categories
	};
}) satisfies PageLoad;
