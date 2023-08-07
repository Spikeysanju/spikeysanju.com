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
	import { MENU } from '$lib/data/static/static.js';
	import { clsx } from '$lib/utils/clsx.js';

	$: path = $page.url.pathname;

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
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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

		{#if path !== '/'}
			<div class="flex w-full items-center justify-center">
				<nav class="hidden w-full md:block">
					<ul
						class="my-5 flex w-full flex-wrap items-center justify-center gap-3 rounded-full bg-white px-2 text-sm font-normal shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 dark:bg-gray-800/90 dark:ring-white/10"
					>
						{#each MENU as item}
							<li>
								<a
									class={clsx(
										'plain relative block p-2 px-3 text-sm font-medium transition hover:text-gray-500 dark:hover:text-gray-400',
										path === item.route
											? 'font-bold text-gray-900 dark:text-gray-300'
											: 'text-gray-500 dark:text-gray-400'
									)}
									href={item.route}>{item.title}</a
								>
							</li>
						{/each}
					</ul>
				</nav>

				<nav
					class="fixed bottom-0 m-5 flex w-full flex-wrap items-center justify-center gap-3 rounded-full bg-white px-2 text-sm font-normal shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 dark:bg-gray-800/90 dark:ring-white/10 md:hidden"
				>
					<div class="overflow-x-auto">
						<ul class="ml-6 mr-6 flex w-full items-start justify-center space-x-3">
							{#each MENU as item}
								<li class="w-full items-start justify-center py-3">
									<a
										class={clsx(
											'p-3 text-sm font-medium transition hover:text-gray-500 dark:hover:text-gray-400',
											path === item.route
												? 'font-bold text-gray-900 dark:text-gray-300'
												: 'text-gray-500 dark:text-gray-400'
										)}
										href={item.route}>{item.title}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</nav>
			</div>
		{/if}

		<Header />

		{#if $showLoginModal}
			<Modal />
		{/if}

		<slot />

		<Footer />
	</div>
</main>
