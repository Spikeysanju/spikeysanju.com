import { CLOUDFLARE_SECRET } from '$env/static/private';
import { generateRandomId } from '$lib/utils/utils';
import { fail } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'nodejs18.x'
};
export const PUT = (async (event) => {
	const { image, fileType } = await event.request.json();
	const user = await event.locals.getSession();

	if (!user) {
		return fail(400, {
			message: 'You are not logged in'
		});
	}

	const id = generateRandomId();

	await event
		.fetch(`https://api.spikeysanju.com/upload/${id}`, {
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
}) as RequestHandler;
