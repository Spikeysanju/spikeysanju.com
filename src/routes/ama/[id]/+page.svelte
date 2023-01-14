<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex w-full flex-col">
	<h1>Details</h1>
	<p>Question: {data.ama?.question}</p>
	<p>Description: {data.ama?.description}</p>
	<p>Asked by: {data.ama?.userId}</p>
</section>
