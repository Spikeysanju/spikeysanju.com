<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import type { LayoutData } from './$types';
	import { fade } from 'svelte/transition';
	import { signIn, signOut } from '@auth/sveltekit/client';

	export let data: LayoutData;
</script>

{#key data.currentRoute}
	<main
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
		class="mx-auto max-w-2xl px-3"
	>
		{#if data.session}
			<div class="flex w-full flex-row items-center justify-between">
				<p>{data.session.user?.name}</p>
				<button on:click={() => signOut()}>Sign out</button>
			</div>
		{:else}
			<button on:click={() => signIn()}>Sign in</button>
		{/if}
		<Header />
		<slot />
	</main>
{/key}
