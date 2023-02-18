import prisma from '$lib/prisma/prisma';
import { generateSitemapForAma } from '$lib/utils/utils';
import type { RequestHandler } from './$types';
import { PUBLIC_WEBSITE_URL } from '$env/static/public';

export const GET = (async () => {
	const amas = await prisma.ama.findMany();
	return new Response(generateSitemapForAma(PUBLIC_WEBSITE_URL, 'ama', amas));
}) satisfies RequestHandler;
