import prisma from '$lib/prisma/prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const ama = await prisma.ama.findUnique({
		where: {
			id: params.id
		}
	});
	return {
		ama: ama
	};
}) satisfies PageServerLoad;
