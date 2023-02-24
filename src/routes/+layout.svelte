<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import type { LayoutData } from './$types';
	import { fade } from 'svelte/transition';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import CommandPalette, { defineActions } from 'svelte-command-palette';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Modal from '$lib/components/model/Modal.svelte';

	const actions = defineActions([
		{
			actionId: 'home',
			title: 'Home',
			subTitle: 'Home page',
			onRun: ({ action, storeProps, storeMethods }) => {
				goto('/');
			},
			keywords: ['home', 'homepage', 'main']
		},
		{
			actionId: 'irl',
			title: 'IRL',
			subTitle: 'People i want to meet IRL',
			onRun: ({ action, storeProps, storeMethods }) => {
				goto('/irl');
			},
			keywords: ['irl', 'irlpage', 'people']
		},
		{
			actionId: 'photos',
			title: 'Photos',
			subTitle: 'Some photos I have taken over the years.',
			onRun: ({ action, storeProps, storeMethods }) => {
				goto('/photos');
			},
			keywords: ['photo', 'photopage', 'pic', 'pics']
		},
		{
			actionId: 'about',
			title: 'About',
			subTitle: 'About me',
			onRun: ({ action, storeProps, storeMethods }) => {
				goto('/about');
			},
			keywords: ['about', 'aboutpage', 'me']
		},
		{
			actionId: 'signout',
			title: 'Sign out',
			subTitle: 'Sign out of the app',
			onRun: ({ action, storeProps, storeMethods }) => {
				signOut();
			},
			keywords: ['signout', 'signoutpage', 'signout']
		},
		{
			actionId: 'signin',
			title: 'Sign in',
			subTitle: 'Sign in to the app',
			onRun: ({ action, storeProps, storeMethods }) => {
				signIn();
			},
			keywords: ['signin', 'signinpage', 'signin']
		},
		{
			actionId: 'github',
			title: 'Github',
			subTitle: 'Github page',
			onRun: ({ action, storeProps, storeMethods }) => {
				window.open('https://www.github.com/spikeysanju', '_blank');
			},
			keywords: ['github', 'github page']
		},
		{
			actionId: 'twitter',
			title: 'Twitter',
			subTitle: 'Twitter page',
			onRun: ({ action, storeProps, storeMethods }) => {
				window.open('https://www.twitter.com/spikeysanju', '_blank');
			},
			keywords: ['twitter', 'twitter page']
		},
		{
			actionId: 'linkedin',
			title: 'Linkedin',
			subTitle: 'Linkedin page',
			onRun: ({ action, storeProps, storeMethods }) => {
				window.open('https://www.linkedin.com/in/spikeysanju', '_blank');
			},
			keywords: ['linkedin', 'linkedin page']
		},
		{
			actionId: 'instagram',
			title: 'Instagram',
			subTitle: 'Instagram page',
			onRun: ({ action, storeProps, storeMethods }) => {
				window.open('https://www.instagram.com/spikeysanju', '_blank');
			},
			keywords: ['instagram', 'insta', 'insta page']
		},
		{
			actionId: 'books',
			title: 'Books',
			subTitle: 'Books i read',
			onRun: ({ action, storeProps, storeMethods }) => {
				goto('/books');
			},
			keywords: ['books', 'book', 'bookpage']
		},
		{
			actionId: 'blogs',
			title: 'Blogs',
			subTitle: 'Blogs i write',
			onRun: ({ action, storeProps, storeMethods }) => {
				goto('/blog');
			},
			keywords: ['blogs', 'blog', 'blogpage']
		}
	]);

	export let data: LayoutData;

	let showModal: boolean = false;
</script>

<svelte:head>
	<script
		async
		defer
		data-website-id="ff21a4b4-b57f-40f5-904a-e6cc43a9be17"
		src="https://analytics.spikeysanju.com/umami.js"
	></script></svelte:head
>

{#key data.currentRoute}
	<main
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
		class="mx-auto max-w-2xl px-3"
		data-sveltekit-preload-data="hover"
	>
		<CommandPalette
			unstyled={false}
			commands={actions}
			keyboardButtonClass="bg-black text-white"
			inputClass="bg-gray-50 flex w-full border-transparent focus:border-transparent focus:ring-0"
			overlayClass="bg-black bg-opacity-90"
			paletteWrapperInnerClass="w-full flex flex-col"
			resultsContainerClass="h-max bg-white"
			resultContainerClass="bg-white"
			optionSelectedClass="text-gray-50 bg-gray-50"
			subtitleClass="text-gray-500"
			titleClass="text-gray-900"
			descriptionClass="text-sm"
		/>

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
			<button on:click={() => (showModal = true)}> Sign in with GitHub </button>
		{/if}

		<Header />

		{#if showModal}
			<Modal bind:showModal>
				<h3 slot="header">Welcome to Spikey's Portfolio</h3>
				<div slot="content" class="flex flex-col space-y-3">
					<p>
						In order to interact with the portfolio like asking questions, you need to sign in with
						GitHub.
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
						autofocus
						on:click={() => (showModal = false)}>Close modal</button
					>
				</div>
			</Modal>
		{/if}

		<slot />
	</main>
{/key}
