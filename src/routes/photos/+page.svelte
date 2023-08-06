<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';

	export let data;
</script>

<svelte:head>
	<title>Photos | Spikey Sanju</title>
	<meta name="description" content="Some photos I've taken over the years." />

	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/photos" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<h1 class="flex w-full text-start tracking-tight">Photos.</h1>
	<p class="flex w-full text-gray-500 dark:text-gray-400">Some photos I've taken over the years.</p>

	{#if $page.data.session && data.currentUser?.role === 'ADMIN'}
		<div class="mt-3 flex w-full">
			<a
				href="photos/new"
				class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"
				>Add photo</a
			>
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
		class="mb-6 mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.60),1fr))] gap-6"
	>
		{#each data.photos as item}
			<a
				href={`${item.url}`}
				class="text-gray-500 hover:text-black hover:underline dark:hover:text-white"
			>
				<div class="flex flex-col items-center justify-center space-y-3">
					<img src={`${item.url}`} class="aspect-auto object-cover" alt={item.title} />
					<p class="flex w-full text-sm text-black dark:text-white">{item.title}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
