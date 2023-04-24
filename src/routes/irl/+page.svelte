<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';
	import PeopleCard from '$lib/components/irl/PeopleCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>IRL | Spikey Sanju</title>
	<meta name="description" content="People I want to meet IRL." />

	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/irl" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<h1 class="flex w-full">People I want to Meet IRL.</h1>
	<p class="flex w-full text-gray-500 dark:text-gray-400">
		Check out my list of inspirations, people whose work I admire.
	</p>
	{#if $page.data.session && data.currentUser?.role === 'ADMIN'}
		<div class="mt-3 flex w-full">
			<a
				href="irl/new"
				class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"
				>Add person to list</a
			>
		</div>
	{/if}

	<div class="mt-6 flex w-full flex-col">
		{#if data.peopleIWannaMeetIRL}
			{#each data.peopleIWannaMeetIRL as item}
				<a href={item.link}>
					<PeopleCard name={item.name} met={item.met} tags={item.tags} url={item.link} />
				</a>
			{/each}
		{:else}
			<p class="flex w-full text-gray-500 dark:text-gray-400">No people to meet IRL yet.</p>
		{/if}
	</div>
</section>
