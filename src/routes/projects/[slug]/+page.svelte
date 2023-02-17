<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} – Spikey Sanju</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article>
	<h1>{data.title}</h1>
	{#if data.image}
		<img src={data.image} alt={data.title} class="mb-8 mt-8" />
	{/if}
	<svelte:component this={data.content} />
</article>
