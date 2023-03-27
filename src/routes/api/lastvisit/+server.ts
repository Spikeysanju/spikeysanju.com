import type { RequestHandler } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};
export const PUT = (async () => {
	const res = await fetch('https://api.spikeysanju.com/lastvisit', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return new Response(JSON.stringify(res), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		},
		statusText: 'OK'
	});
}) satisfies RequestHandler;
