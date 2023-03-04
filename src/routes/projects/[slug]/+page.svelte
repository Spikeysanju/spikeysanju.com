<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/utils/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} | Spikey Sanju</title>
	<meta name="description" content={data.title} />
</svelte:head>

<article>
	<h1>{data.title}</h1>
	{#if data.categories}
		<div class="mb-8 mt-3 flex w-full items-center space-x-3">
			{#each data.categories as item}
				<span
					class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200"
				>
					{capitalizeFirstLetter(item)}
				</span>
			{/each}
		</div>
	{/if}
	{#if data.image}
		<img src={data.image} alt={data.title} class="mb-8 mt-8" />
	{/if}
	<svelte:component this={data.content} />
</article>
