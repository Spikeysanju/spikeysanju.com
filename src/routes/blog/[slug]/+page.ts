import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	console.log('blog params', params.slug);

	// const blog = await import(`/src/lib/data/blogs/${params.slug}.md`);
	const post = await import(`../../../lib/data/blogs/${params.slug}.md`);

	const { title, date, author, image, categories } = post.metadata;
	const content = post.default;

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
