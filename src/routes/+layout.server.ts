import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, url }) => {
	return {
		session: await locals.getSession(),
		currentRoute: url.pathname
	};
}) satisfies LayoutServerLoad;
