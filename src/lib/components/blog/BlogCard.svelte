<script lang="ts">
	export let title: string;
	export let author: string;
	export let image: string;
</script>

<article class="flex w-full max-w-sm flex-col">
	<img src={image} alt={title} class="aspect-video" />

	<div class="space-y mt-3 mb-3 flex w-full flex-col space-y-2">
		<h1 class="-mb-2 text-lg tracking-tight text-black">{title}</h1>
		<p class="text-base text-gray-500">{author}</p>
	</div>
</article>
