<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	// print data on click
	function printData() {
		console.log(data);
	}
</script>

<svelte:head>
	<title>{data.books}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<section class="flex flex-col space-y-3">
	<h1 class="text-3xl tracking-tight">{data.books}</h1>
	<p class="text-lg tracking-tight">{data.description}</p>

	<button on:click={printData} class="bg-black px-4 py-4 text-white">Notify me</button>
</section>
