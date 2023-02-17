<script lang="ts">
	import type { PageData } from './$types';
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} – Spikey Sanju</title>
	<meta property="og:title" content={data.title} />
	<meta content="{PUBLIC_WEBSITE_URL}/og?message={data.title}" property="og:image" />
</svelte:head>

<article>
	<svelte:component this={data.content}>
		{#if data.categories}
			<div class="mb-8 mt-3 flex w-full items-center space-x-3">
				{#each data.categories as item}
					<a href={`/blog/categories/${item}`}>
						<span
							class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800"
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
	</svelte:component>
</article>
