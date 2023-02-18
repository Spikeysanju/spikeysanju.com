<script lang="ts">
	import ToolCard from '$lib/components/tool/ToolCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<h1>Tools.</h1>
	<p class="flex w-full text-gray-500">Here is my list of tools i use on my day to day life.</p>

	<div class="mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.24),1fr))] gap-12">
		{#each data.tools as item}
			<a href={`/tools/${item.id}`}>
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
