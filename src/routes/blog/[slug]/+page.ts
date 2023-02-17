import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	console.log('blog params', params.slug);
	// const blog = await import(`/src/lib/data/blogs/${params.slug}.md`);
	const blog = await import.meta.glob(`/src/lib/data/blogs/${params.slug}.md`);

	// return blog.metadata;
	const { metadata } = await blog.default();
	const { title, content, date, author, image, categories } = metadata;
 
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
