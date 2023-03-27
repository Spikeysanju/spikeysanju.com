import prisma from '$lib/prisma/prisma';

export const load = async () => {
	return {
		peopleIWannaMeetIRL: await prisma.peopleIWannaMeetIRL.findMany()
	};
};
