<script lang="ts">
	export let title: string;
	export let author: string;
</script>

<article class="flex w-full flex-col">
	<div class="h-56 w-full bg-red-50" />
	<div class="space-y mt-3 mb-3 flex w-full flex-col space-y-2">
		<h1 class="-mb-2 text-lg tracking-tight text-black">{title}</h1>
		<p class="text-base text-gray-500">{author}</p>
	</div>
</article>
