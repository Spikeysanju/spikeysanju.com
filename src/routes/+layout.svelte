<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import type { LayoutData } from './$types';
	import { fade } from 'svelte/transition';

	export let data: LayoutData;
</script>

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }} class="mx-auto px-3">
		<Header />
		<slot />
	</main>
{/key}
