import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma/prisma';

export const load = (async () => {
	const tools = await prisma.tools.findMany({
		orderBy: {
			name: 'asc'
		}
	});
	return {
		tools: tools
	};
}) satisfies PageServerLoad;
