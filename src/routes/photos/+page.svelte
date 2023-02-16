<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex w-full flex-col items-center justify-center">
	<h1 class="flex w-full text-start tracking-tight">Photos.</h1>
	<p class="flex w-full text-gray-500">Some photos I've taken over the years.</p>

	{#if data.user?.role === 'ADMIN'}
		<div class="flex w-full">
			<button
				class="mt-4 rounded-sm bg-gray-100 px-3 py-2 font-medium text-black hover:cursor-pointer hover:bg-gray-200"
			>
				<a href="/photos/new">Add a photo</a>
			</button>
		</div>
	{/if}

	<!-- <div class="mb-6 mt-6 w-full columns-1 md:columns-2 lg:columns-2">
		{#each data.photos as item}
			<a href={`${item.url}`} class="text-gray-500 hover:text-black hover:underline">
				<div class="mt-3 flex flex-col items-center justify-center space-y-3">
					<img src={`${item.url}`} class="aspect-video object-cover" alt={item.title} />
					<p class="flex w-full text-sm">{item.title}</p>
				</div>
			</a>
		{/each}
	</div> -->

	<div
		class="mt-6 mb-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.60),1fr))] gap-6"
	>
		{#each data.photos as item}
			<a href={`${item.url}`} class="text-gray-500 hover:text-black hover:underline">
				<div class="flex flex-col items-center justify-center space-y-3">
					<img src={`${item.url}`} class="aspect-auto object-cover" alt={item.title} />
					<p class="flex w-full text-sm">{item.title}</p>
				</div>
			</a>
		{/each}

		{#if data.photos.length === 0}
			<div class="flex h-full w-full flex-col items-center justify-center">
				<h2 class="text-2xl">No photos found.</h2>
			</div>
		{/if}
	</div>
</section>
