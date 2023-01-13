import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		books: 'Show your work!',
		description: 'This is a description of the books page.'
	};
}) satisfies PageServerLoad;
