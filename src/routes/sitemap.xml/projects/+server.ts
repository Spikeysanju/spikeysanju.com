import type { RequestHandler } from './$types';
import { PUBLIC_WEBSITE_URL } from '$env/static/public';
import type { Data } from '$lib/type/blog-metadata';
import { generateSitemap } from '$lib/utils/utils';

export const GET = (async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_WEBSITE_URL}/api/projects`);
	const posts = (await res.json()) as Data[];

	return new Response(generateSitemap(PUBLIC_WEBSITE_URL, 'project', posts), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		},
		status: 200,
		statusText: 'OK'
	});
}) satisfies RequestHandler;
