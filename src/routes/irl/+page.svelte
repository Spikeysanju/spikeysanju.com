<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';
	import PeopleCard from '$lib/components/irl/PeopleCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>IRL – Spikey Sanju</title>
	<meta name="description" content="People I want to meet IRL." />

	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/irl" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="flex w-full flex-col items-center justify-center">
	<h1 class="flex w-full">People I want to Meet IRL.</h1>
	<p class="flex w-full text-gray-500">
		Check out my list of inspirations, people whose work & character I admire.
	</p>
	{#if $page.data.session && $page.data.session.user}
		<div class="mt-3 flex w-full">
			<a
				href="irl/new"
				class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"
				>Add person to list</a
			>
		</div>
	{/if}

	<div class="flex-co mt-6 flex w-full">
		{#each data.peopleIWannaMeetIRL as item}
			<a href={item.link}>
				<PeopleCard
					name={item.name}
					met={item.met}
					image={item.image}
					tags={item.tags}
					url={'https://www.twitter.com/spikeysanju'}
				/>
			</a>
		{/each}
	</div>
</section>
