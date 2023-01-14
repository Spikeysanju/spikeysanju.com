import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma/prisma';

export const load = (async () => {
	const ama = await prisma.ama.findMany();
	return {
		ama: ama
	};
}) satisfies PageServerLoad;
