import { CLOUDFLARE_SECRET } from '$env/static/private';
import { generateRandomId } from '$lib/utils/utils';
import { fail } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async (event) => {
	const { image, fileType } = await event.request.json();
	const user = await event.locals.getSession();

	if (!user) {
		return fail(400, {
			message: 'You are not logged in'
		});
	}

	const id = generateRandomId();

	await event
		.fetch(`https://portfolio.spikeysanju.workers.dev/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': fileType,
				'X-CF-Secret': CLOUDFLARE_SECRET
			},
			body: Uint8Array.from(atob(image.replace(/^data[^,]+,/, '')), (v) => v.charCodeAt(0))
		})
		.then((res) => {
			if (!res.ok) {
				throw new Error(`HTTP error: ${res.status}`);
			}
			return res;
		})
		.catch((error) => {
			return fail(400, {
				message: 'Something went wrong' + error
			});
		});

	return new Response(
		JSON.stringify({
			id: id,
			url: `https://cdn.spikeysanju.com/${id}`,
			fileType: fileType
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			},
			statusText: 'OK'
		}
	);
};
