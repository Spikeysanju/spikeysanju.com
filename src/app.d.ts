// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
/// <reference types="@auth/sveltekit" />

declare namespace App {
	// interface Error {
	// 	status: number;
	// 	message: string;
	// }
	interface Locals {
		getSession: () => Promise<import('@auth/core').Session | null>;
		user: import('@prisma/client').User | null;
	}
	// interface PageData {}
	// interface Platform {}
}
