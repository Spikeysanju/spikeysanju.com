import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
}) satisfies LayoutLoad;
