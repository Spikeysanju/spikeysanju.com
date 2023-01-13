import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	console.log('params', params.slug);

	const post = await import(`/src/lib/posts/${params.slug}.md`);
	const { title, date, author } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		author
	};
}) satisfies PageLoad;
