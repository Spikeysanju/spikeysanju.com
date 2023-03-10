import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const books = await import(`../../../lib/data/books/${params.slug}.md`);

	const { title, date, author, image, categories, excerpt } = books.metadata;
	const content = books.default;

	return {
		title: title,
		content: content,
		date: date,
		author: author,
		slug: params.slug,
		image: image,
		categories: categories,
		excerpt: excerpt
	};
}) satisfies PageLoad;
