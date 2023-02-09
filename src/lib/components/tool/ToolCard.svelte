<script lang="ts">
	export let title: string;
	export let image: string;
</script>

<div class="mt-6 flex w-full max-w-sm flex-col space-y-3">
	<img src={image} alt={title} class="aspect-square" />
	<h1 class="w-full text-center text-lg tracking-tight text-black">{title}</h1>
</div>
