<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} – Spikey Sanju</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article>
	<svelte:component this={data.content} class="leading-relaxed" />
</article>
