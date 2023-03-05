import type { LastVisit } from '$lib/type/lastvisit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, url, fetch }) => {
	const lastVisit = (await fetch('https://api.spikeysanju.com/lastvisit', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((res) => res.json())) as LastVisit;

	return {
		session: await locals.getSession(),
		currentRoute: url.pathname,
		lastVisit: lastVisit
	};
}) satisfies LayoutServerLoad;
