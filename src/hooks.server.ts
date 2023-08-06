import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET, AUTH_SECRET } from '$env/static/private';
import prisma from '$lib/prisma/prisma';
import type { Adapter } from '@auth/core/adapters';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import type { Provider } from '@auth/core/providers';

export const handleAuth = SvelteKitAuth({
	trustHost: true,
	adapter: PrismaAdapter(prisma) as Adapter,
	secret: AUTH_SECRET,
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })] as Provider[]
}) satisfies Handle;

const saveUserToLocal = (async ({ event, resolve }) => {
	const session = await event.locals.getSession();

	if (!session) {
		return resolve(event);
	}

	const user = await prisma.user.findUnique({
		where: {
			email: session?.user?.email as string
		}
	});

	if (!user) {
		return resolve(event);
	}

	event.locals.user = user;

	const response = await resolve(event);

	return response;
}) satisfies Handle;

const pageLoadSpeed = (async ({ event, resolve }) => {
	const route = event.url;

	const start = performance.now();
	const response = await resolve(event);
	const end = performance.now();

	const responseTime = end - start;

	if (responseTime > 2000) {
		console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`);
	}

	if (responseTime < 1000) {
		console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`);
	}

	return response;
}) satisfies Handle;

export function handleError({ error, event }) {
	return {
		message: 'Something went wrong'
	};
}

export const handle = sequence(handleAuth, saveUserToLocal, pageLoadSpeed);
