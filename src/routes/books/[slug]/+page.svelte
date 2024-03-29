<script lang="ts">
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';
	import { capitalizeFirstLetter } from '$lib/utils/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Book Review: {data.title} | Spikey Sanju</title>
	<meta name="description" content={data.excerpt} />

	<!-- open graph /facebook -->
	<meta property="og:title" content={data.title} />
	<meta
		property="og:image"
		content="{PUBLIC_WEBSITE_URL}/api/og?message={data.excerpt}&title={`Book Review: ${data.title}`}"
	/>
	<meta property="og:description" content={data.excerpt} />
	<meta property="og:url" content="{PUBLIC_WEBSITE_URL}/books/{data.slug}" />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="Spikey Sanju" />
	<meta property="og:locale" content="en_UK" />

	<!-- article -->
	<meta property="article:author" content="Spikey Sanju" />
	<meta property="article:published_time" content={data.date} />
	<meta property="article:modified_time" content={data.date} />
	<meta property="article:section" content="books" />
	<meta name="article:tag" content={data.categories} />

	<!-- twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@spikeysanju" />
	<meta name="twitter:creator" content="@spikeysanju" />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.slug} />
	<meta
		name="twitter:image"
		content="{PUBLIC_WEBSITE_URL}/api/og?message={data.excerpt}&title={`Book Review: ${data.title}`}"
	/>
	<meta property="twitter:url" content="{PUBLIC_WEBSITE_URL}/books/{data.slug}" />

	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/books/{data.slug}" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<article>
	<h1>{data.title}</h1>
	{#if data.categories}
		<div class="mb-8 mt-3 flex w-full items-center space-x-3">
			{#each data.categories as item}
				<a href={`/books/categories/${item}`}>
					<span
						class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200 dark:bg-purpleontop dark:text-white"
					>
						{capitalizeFirstLetter(item)}
					</span>
				</a>
			{/each}
		</div>
	{/if}
	{#if data.image}
		<div class="flex w-full flex-col items-center justify-center">
			<img src={data.image} alt={data.title} class="mb-8 mt-8 h-96 shadow-lg" />
			<span class="flex text-center text-gray-500">{data.title}</span>
		</div>
	{/if}
	<svelte:component this={data.content} />
</article>
