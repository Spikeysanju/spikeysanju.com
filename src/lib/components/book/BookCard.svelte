<script lang="ts">
	export let title: string;
	export let author: string;
	export let image: string;
</script>

<article class="flex w-full max-w-sm flex-col transition-all ease-linear hover:-rotate-3">
	<img src={image} alt={title} class="aspect-auto shadow-lg" />

	<div class="space-y mb-3 mt-3 flex w-full flex-col space-y-2">
		<h1 class="-mb-2 truncate text-lg tracking-tight text-black dark:text-white">{title}</h1>
		<p class="text-base text-gray-500 dark:text-gray-400">{author}</p>
	</div>
</article>
