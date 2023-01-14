import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	console.log('params', params.slug);

	const post = await import(`/src/lib/posts/${params.slug}.md`);
	const { title, date, author, image } = post.metadata;
	const content = post.default;

	return {
		title: title,
		content: content,
		date: date,
		author: author,
		slug: params.slug,
		image: image
	};
}) satisfies PageLoad;
