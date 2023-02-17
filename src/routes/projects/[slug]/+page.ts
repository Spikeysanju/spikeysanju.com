import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const project = await import(`../../../lib/data/books/${params.slug}.md`);
	const { title, date, author, image } = project.metadata;
	const content = project.default;

	return {
		title: title,
		content: content,
		date: date,
		author: author,
		slug: params.slug,
		image: image
	};
}) satisfies PageLoad;
