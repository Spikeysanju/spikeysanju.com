<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import type { LayoutData } from './$types';
	import { fade } from 'svelte/transition';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import CommandPalette, { defineActions } from 'svelte-command-palette';
	import { goto } from '$app/navigation';

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
</script>

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
