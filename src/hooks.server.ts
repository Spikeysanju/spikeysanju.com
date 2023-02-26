import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET, AUTH_TRUST_HOST } from '$env/static/private';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '$lib/prisma/prisma';
import type { Adapter } from '@auth/core/adapters';
import type { Handle } from '@sveltejs/kit';

export const handle = SvelteKitAuth({
	trustHost: AUTH_TRUST_HOST === 'true' ? true : false,
	adapter: PrismaAdapter(prisma) as Adapter,
	secret: process.env.AUTH_SECRET,
	providers: GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }) as any,
	session: {
		// Choose how you want to save the user session.
		// The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
		// If you use an `adapter` however, we default it to `"database"` instead.
		// You can still force a JWT session by explicitly defining `"jwt"`.
		// When using `"database"`, the session cookie will only contain a `sessionToken` value,
		// which is used to look up the session in the database.
		strategy: 'database',

		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 30 * 24 * 60 * 60, // 30 days

		// Seconds - Throttle how frequently to write to database to extend a session.
		// Use it to limit write operations. Set to 0 to always update the database.
		// Note: This option is ignored if using JSON Web Tokens
		updateAge: 24 * 60 * 60, // 24 hours

		// The session token is usually either a random UUID or string, however if you
		// need a more customized session token string, you can define your own generate function.
		generateSessionToken: () => {
			return crypto.randomUUID();
		}
	},
	debug: process.env.NODE_ENV === 'development' ? true : false,
	events: {
		signIn: async (message) => {
			console.log('✅ Successfully signed in', message);
		}
	}
}) satisfies Handle;
