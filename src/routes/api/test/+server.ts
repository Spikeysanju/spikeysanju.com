import type { RequestHandler } from './$types';

export const GET = (async () => {
	const route = 'impact-of-user-flow-in-startup';
	const blog = await import(`../../../lib/data/blogs/${route}.md`);

	const { title, date, author, image, categories } = blog.metadata;
	const content = blog.default;

	return new Response(
		JSON.stringify({
			title: title,
			content: content,
			date: date,
			author: author,
			slug: route,
			image: image,
			categories: categories
		}),
		{
			headers: {
				'content-type': 'application/json'
			},
			status: 200,
			statusText: 'OK'
		}
	);
}) satisfies RequestHandler;
