<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Blog categories</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
