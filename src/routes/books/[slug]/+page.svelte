<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} – Spikey Sanju</title>
	<meta property="og:title" content={data.title} />
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
