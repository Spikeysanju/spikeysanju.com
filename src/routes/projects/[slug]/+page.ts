import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const project = await import(`../../../lib/data/projects/${params.slug}.md`);
	const { title, date, author, image, categories } = project.metadata;
	const content = project.default;

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
