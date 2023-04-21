<script lang="ts">
	import Icon from '$lib/components/icon/Icon.svelte';
	import MenuCell from '$lib/components/menu/MenuCell.svelte';
	import type { PageData } from './$types';

	const links = [
		{
			name: 'Twitter',
			href: 'https://twitter.com/spikeysanju'
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/spikeysanju/'
		},
		{
			name: 'GitHub',
			href: 'https://www.github.com/spikeysanju'
		},
		{
			name: 'YouTube',
			href: 'https://www.youtube.com/spikeysanju'
		},
		{
			name: 'Dribbble',
			href: 'https://www.dribbble.com/spikeysanju'
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/imspikeysanju'
		},
		{
			name: 'Pinterest',
			href: 'https://www.pinterest.com/spikeysanju'
		},
		{
			name: 'Discord',
			href: 'https://discord.gg/2Z8Y4Z8'
		},
		{
			name: 'Twitch',
			href: 'https://www.twitch.tv/spikeysanju'
		},
		{
			name: 'Buy me a coffee',
			href: 'https://www.buymeacoffee.com/spikeysanju'
		}
	] satisfies Links[];

	export let data: PageData;
</script>

<section class="flex min-h-screen flex-col items-start justify-start space-y-8">
	<div class="flex w-full max-w-6xl flex-col items-start justify-center space-y-8">
		<h1 class="flex w-full text-start">Links.</h1>

		<nav class="flex w-full flex-col items-center justify-between space-y-4">
			{#each links as item}
				<MenuCell name={item.name} href={item.href} icon={'rightArrow'} />
			{/each}
		</nav>
	</div>
</section>
