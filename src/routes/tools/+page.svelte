<script lang="ts">
	import { page } from '$app/stores';
	import ToolCard from '$lib/components/tool/ToolCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tools | Spikey Sanju</title>
	<meta name="description" content="Tools I use on my day to day life." />
</svelte:head>

<section class="mb-3 flex min-h-screen w-full flex-col items-center justify-start">
	<h1 class="flex w-full items-center justify-start">Tools.</h1>
	<p class="flex w-full text-gray-500 dark:text-gray-400">
		Here is my list of tools i use on my day to day life.
	</p>
	{#if $page.data.session && data.currentUser?.role === 'ADMIN'}
		<div class="mt-3 flex w-full">
			<a
				href="tools/new"
				class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"
				>Add a tool</a
			>
		</div>
	{/if}

	<div
		class="mb-6 mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.24),1fr))] gap-12"
	>
		{#each data.tools as item}
			<a href={`/tools/${item.slug}`}>
				<ToolCard title={item.name} image={item.image} />
			</a>
		{/each}
	</div>

	{#if data.tools.length === 0}
		<div class="flex h-full w-full flex-col items-center justify-center">
			<h2 class="text-2xl">No tools found.</h2>
		</div>
	{/if}
</section>
