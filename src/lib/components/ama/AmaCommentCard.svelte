<script lang="ts">
	import { formatDistance } from 'date-fns';

	export let image = '';
	export let name = '';
	export let content = '';
	export let createdAt = '';
</script>

<div class="py-3">
	<div class="flex flex-row items-center justify-between">
		<div class="flow-row item-center flex w-full justify-between">
			<div class="flex flex-row items-center justify-center space-x-3">
				<img src={image} alt={name} class="h-9 w-9 rounded-full" />
				<span class="font-bold text-gray-900">{name}</span>
			</div>

			<div class="text-right">
				<span class="text-gray-500">{formatDistance(new Date(`${createdAt}`), new Date())}</span>
			</div>
		</div>
	</div>

	<p class="mt-3 whitespace-pre-line">{content}</p>
</div>
