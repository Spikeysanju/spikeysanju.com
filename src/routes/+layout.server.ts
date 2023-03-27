import prisma from '$lib/prisma/prisma';
import type { LastVisit } from '$lib/type/lastvisit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, url, fetch }) => {
	const session = await locals.getSession();

	await fetch('https://api.spikeysanju.com/lastvisit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const lastVisit = (await fetch('https://api.spikeysanju.com/lastvisit', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((res) => res.json())) as LastVisit;

	// if session is not null, then get the user details
	const user = session
		? await prisma.user.findUnique({
				where: {
					email: session.user?.email as string
				}
		  })
		: null;

	return {
		session: session,
		currentUser: user,
		currentRoute: url.pathname,
		lastVisit: lastVisit
	};
}) satisfies LayoutServerLoad;
