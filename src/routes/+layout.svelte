<script lang="ts">
	import '$lib/app.css';
	import { navigating } from '$app/stores';
	import Header from '$lib/components/header/Header.svelte';
	import { fade } from 'svelte/transition';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Modal from '$lib/components/modal/Modal.svelte';
	import { navigationState, showLoginModal } from '$lib/store/store';
	import PageLoader from '$lib/components/loading/PageLoader.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	$: if ($navigating) $navigationState = 'loading';
	else $navigationState = 'loaded';

	export let data;
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

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />

	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta
		name="keywords"
		content="Spikey Sanju, Spikey, Sanju, Portfolio, UI UX Design, Android, THISUX HQ"
	/>
</svelte:head>

{#if $navigationState === 'loading'}
	<div out:fade={{ delay: 500 }}>
		<PageLoader />
	</div>
{/if}

<main
	class="mx-auto bg-white px-3 font-satoshi text-black dark:bg-deeppurple dark:text-white"
	data-sveltekit-preload-data="hover"
>
	<div class="mx-auto max-w-2xl bg-white px-3 py-3 text-black dark:bg-deeppurple dark:text-white">
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

		{#if data.city !== 'unknown' || data.country !== 'unknown'}
			<p id="lastvisit" class=" text-gray-500 dark:text-gray-400">
				Last visit is from: {data.city}, {data.country}
			</p>
		{/if}

		<Header />

		{#if $showLoginModal}
			<Modal />
		{/if}

		<slot />

		<Footer />
	</div>
</main>
