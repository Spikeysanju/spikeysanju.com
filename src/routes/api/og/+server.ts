import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import type { RequestHandler } from '../$types';
import Satoshi from '$lib/fonts/Satoshi-Medium.woff';
import { html as toReactNode } from 'satori-html';
import OGImage from '$lib/components/og/OGImage.svelte';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};

const height = 630;
const width = 1200;

export const GET = (async ({ url }) => {
	const message = url.searchParams.get('message') ?? undefined;
	const result = OGImage.render({ message });
	const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(element, {
		fonts: [
			{
				name: 'Satoshi',
				data: Buffer.from(Satoshi),
				style: 'normal'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}) satisfies RequestHandler;
