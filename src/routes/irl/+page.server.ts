import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma/prisma';

export const load = (async () => {
	const peopleIWannaMeetIRL = await prisma.peopleIWannaMeetIRL.findMany();
	return {
		peopleIWannaMeetIRL: peopleIWannaMeetIRL
	};
}) satisfies PageServerLoad;
