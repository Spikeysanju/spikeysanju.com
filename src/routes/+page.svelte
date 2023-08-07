<script lang="ts">
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';
	import MenuCell from '$lib/components/menu/MenuCell.svelte';
	import type { Links } from '$lib/type/links';

	const links = [
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Blogs',
			href: '/blog'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Books',
			href: '/books'
		},
		{
			name: 'Photos',
			href: '/photos'
		},
		{
			name: 'Tools',
			href: '/tools'
		},
		{
			name: 'Ama',
			href: '/ama'
		},
		{
			name: 'Links',
			href: '/links'
		}
	] satisfies Links[];
</script>

<svelte:head>
	<title>Home | Spikey Sanju</title>
	<meta
		name="description"
		content="Hi i'm Spikey Sanju, Designer & Engineer, Founder of THISUX Design Studio, where ADHD meets Innovation!"
	/>

	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="flex min-h-screen flex-col items-center justify-start space-y-8 py-6">
	<div class="flex w-full max-w-6xl flex-col items-center justify-center space-y-8">
		<h1
			class="w-full text-start text-[min(8vw,50px)] font-medium tracking-tighter text-gray-900 dark:text-white"
		>
			Hi i'm Spikey Sanju, Designer & Engineer, Founder of <a
				href="https://www.thisux.com"
				class="hover:underline"
			>
				THISUX Design Studio
			</a>, where ADHD meets Innovation!
		</h1>

		<nav class="flex w-full flex-col items-center justify-between space-y-4">
			{#each links as item}
				<MenuCell name={item.name} href={item.href} icon={'rightArrow'} />
			{/each}
		</nav>
	</div>
</section>
