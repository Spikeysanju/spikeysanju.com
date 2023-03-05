<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import type { LayoutData } from './$types';
	import { fade } from 'svelte/transition';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Modal from '$lib/components/model/Modal.svelte';
	import { showLoginModal } from '$lib/store/store';

	export let data: LayoutData;
</script>

<svelte:head>
	<script
		async
		defer
		data-website-id="ff21a4b4-b57f-40f5-904a-e6cc43a9be17"
		src="https://analytics.spikeysanju.com/umami.js"
	>
	</script>

	<!--Chrome, Firefox OS & Opera -->
	<meta name="theme-color" content="#000000" />
	<!--Windows Phone -->
	<meta name="msapplication-navbutton-color" content="#000000" />
	<!--Safari/i0S -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</svelte:head>

{#key data.currentRoute}
	<main
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
		class="mx-auto bg-white px-3 text-black dark:bg-deeppurple dark:text-white"
		data-sveltekit-preload-data="hover"
	>
		<div class="mx-auto mt-3 max-w-2xl bg-white px-3 text-black dark:bg-deeppurple dark:text-white">
			{#if $page.data.session}
				{#if $page.data.session.user?.image}
					<div class="flex flex-row items-center justify-between">
						<div class="flex flex-row items-center space-x-3">
							<img
								src={$page.data.session.user.image}
								class="h-9 w-9 rounded-full object-cover"
								alt={$page.data.session.user.name}
							/>

							<span>
								<small>Signed in as</small><br />
								<strong>{$page.data.session.user?.name ?? 'User'}</strong>
							</span>
						</div>

						<button on:click={() => signOut()} class="button">Sign out</button>
					</div>
				{/if}
			{:else}
				<button on:click={() => ($showLoginModal = true)}> Sign in with GitHub </button>
			{/if}

			<p id="lastvisit" class=" text-gray-500 dark:text-gray-400">
				Last visit is from: {data.lastVisit.lastvisit?.city}, {data.lastVisit?.lastvisit?.country}
			</p>

			<Header />

			{#if $showLoginModal}
				<Modal showModal={$showLoginModal}>
					<h3 slot="header">Welcome to Spikey's Portfolio</h3>
					<div slot="content" class="flex flex-col space-y-3">
						<p>
							In order to interact with the portfolio like asking questions, you need to sign in
							with GitHub.
						</p>
					</div>

					<div slot="cta" class="flex w-full flex-col space-y-3">
						<button
							on:click={() => signIn()}
							class="flex w-full items-center justify-center rounded-md bg-black px-2 py-2 font-medium text-white hover:bg-gray-900"
							>Sign in with GitHub</button
						>

						<button
							class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-gray-100 px-2 py-2 text-black hover:bg-gray-200"
							on:click={() => ($showLoginModal = false)}>Close modal</button
						>
					</div>
				</Modal>
			{/if}

			<slot />
		</div>
	</main>
{/key}
