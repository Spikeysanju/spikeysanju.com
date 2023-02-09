<script lang="ts">
	import MenuCell from '$lib/components/menu/MenuCell.svelte';
	import type { Links } from '$lib/type/links';
	import type { PageData } from './$types';

	export let data: PageData;

	const links = [
		{
			name: 'About',
			href: '/about',
			icon: 'about'
		},
		{
			name: 'Blogs',
			href: '/blog',
			icon: 'blog'
		},
		{
			name: 'Projects',
			href: '/projects',
			icon: 'projects'
		},
		{
			name: 'Books',
			href: '/books',
			icon: 'books'
		},
		{
			name: 'Photos',
			href: '/photos',
			icon: 'photos'
		},
		{
			name: 'Tools',
			href: '/tools',
			icon: 'tools'
		},
		{
			name: 'Ama',
			href: '/ama',
			icon: 'ama'
		},
		{
			name: 'IRL',
			href: '/irl',
			icon: 'irl'
		}
	] satisfies Links[];
</script>

<section class="flex h-screen flex-col items-center justify-center space-y-8">
	<div class="flex w-full max-w-6xl flex-col items-center justify-center space-y-8">
		<h1
			class="text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight"
		>
			Hi i'm Spikey Sanju, Designer & Engineer, Founder of <a
				href="https://www.thisux.com"
				class="hover:underline"
			>
				THISUX Design Studio
			</a>, where ADHD meets Innovation!
		</h1>

		<div class="flex w-full flex-col items-center justify-between space-y-4">
			{#each links as item}
				<MenuCell name={item.name} href={item.href} />
			{/each}
		</div>
	</div>
</section>
