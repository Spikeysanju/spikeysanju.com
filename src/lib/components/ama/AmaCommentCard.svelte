<script lang="ts">
	import { formatDistance } from 'date-fns';

	export let image = '';
	export let name = '';
	export let content = '';
	export let createdAt = '';
</script>

<div class="py-3">
	<div class="flex flex-row items-center justify-between space-y-3">
		<div class="flow-row flex space-x-3">
			<img src={image} alt={name} class="h-6 w-6 rounded-full" />
			<span class="font-bold text-gray-900">{name}</span>
		</div>

		<div class="text-right">
			<span class="text-gray-500">{formatDistance(new Date(`${createdAt}`), new Date())}</span>
		</div>
	</div>

	<p>{content}</p>
</div>
