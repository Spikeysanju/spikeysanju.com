<script lang="ts">
	import type { PageData } from './$types';
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} – Spikey Sanju</title>
	<meta name="description" content={data.content} />
	<meta property="og:title" content={data.title} />
	<meta content="{PUBLIC_WEBSITE_URL}/api/og?message={data.title}" property="og:image" />
	<meta property="og:description" content={data.slug} />
	<meta property="og:url" content={data.slug} />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="Spikey Sanju" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@spikeysanju" />
	<meta name="twitter:creator" content="@spikeysanju" />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.slug} />
	<meta name="twitter:image" content="{PUBLIC_WEBSITE_URL}/api/og?message={data.title}" />
</svelte:head>

<article>
	<h1>{data.title}</h1>
	{#if data.categories}
		<div class="mb-8 mt-3 flex w-full items-center space-x-3">
			{#each data.categories as item}
				<a href={`/blog/categories/${item}`}>
					<span
						class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200"
					>
						{item}
					</span>
				</a>
			{/each}
		</div>
	{/if}
	{#if data.image}
		<img src={data.image} alt={data.title} class="mb-8 mt-8" />
	{/if}

	<svelte:component this={data.content} />
</article>
