<script lang="ts">
	import { handleThemeSwitch } from '$lib/utils/themeswitch';
	import { themeStore } from '$lib/store/store';
	import Icon from '../icon/Icon.svelte';
</script>

<nav class="flex w-full items-center justify-between py-3">
	<div class="flex w-full flex-row items-center justify-between">
		<a href="/" class="text-lg font-medium tracking-tight"> Spikey Sanju;</a>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={handleThemeSwitch}>
		{#if $themeStore === 'light'}
			<Icon name="day" size="medium" />
		{:else}
			<Icon name="night" size="medium" />
		{/if}
	</div>
</nav>
