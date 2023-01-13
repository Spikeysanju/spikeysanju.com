import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'This is the about page',
		description: 'This is the about page description'
	};
}) satisfies PageServerLoad;
