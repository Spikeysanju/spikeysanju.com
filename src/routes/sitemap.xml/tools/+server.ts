import prisma from '$lib/prisma/prisma';
import { generateSitemapForAma } from '$lib/utils/utils';
import type { RequestHandler } from './$types';
import { PUBLIC_WEBSITE_URL } from '$env/static/public';

export const GET = (async () => {
	const tools = await prisma.tools.findMany();
	return new Response(generateSitemapForAma(PUBLIC_WEBSITE_URL, 'tools', tools), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		},
		status: 200,
		statusText: 'OK'
	});
}) satisfies RequestHandler;
