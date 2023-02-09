import prisma from '$lib/prisma/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const photos = await prisma.media.findMany({
		orderBy: {
			title: 'asc'
		}
	});
	return {
		photos: photos
	};
}) satisfies PageServerLoad;
