<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} – Spikey Sanju</title>
	<meta name="description" content={data.slug} />

	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.slug} />
	<meta property="og:image" content={data.image} />
	<meta property="og:url" content={data.slug} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@spikeysanju" />
	<meta name="twitter:creator" content="@spikeysanju" />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.slug} />
	<meta name="twitter:image" content={data.image} />
</svelte:head>

<article>
	<svelte:component this={data.content}>
		{#if data.image}
			<div class="flex w-full flex-col items-center justify-center">
				<img src={data.image} alt={data.title} class="mb-8 mt-8 h-96 shadow-lg" />
				<span class="flex text-center text-gray-500">{data.title}</span>
			</div>
		{/if}
	</svelte:component>
</article>
