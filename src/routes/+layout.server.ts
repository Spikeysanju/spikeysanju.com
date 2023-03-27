import prisma from '$lib/prisma/prisma';
import type { LayoutServerLoad } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};

export const load = (async (event) => {
	const session = await event.locals.getSession();

	const ip = event.getClientAddress();
	const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');
	const country = decodeURIComponent(event.request.headers.get('x-vercel-ip-country') ?? 'unknown');

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
		currentRoute: event.url.pathname,
		ip: ip,
		city: city,
		country: country,
		now: new Date().toISOString(),
	};
}) satisfies LayoutServerLoad;
