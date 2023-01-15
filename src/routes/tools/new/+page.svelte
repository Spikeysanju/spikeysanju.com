<script lang="ts">
	import type { PageData } from './$types';

	let name: string = '';
	let description: string = '';
	let image: string = '';
	let link: string = '';
</script>

<div class="flex w-full flex-col">
	<form action="?/create" method="post" class="flex w-full flex-col space-y-3">
		<label for="name" class="block text-sm font-medium text-gray-700">name</label>
		<div class="mt-1">
			<input
				type="text"
				name="name"
				id="name"
				autocomplete="name"
				bind:value={name}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<div>
			<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
			<div class="mt-1">
				<textarea
					id="description"
					name="description"
					rows="3"
					bind:value={description}
					class="mt-1 block w-full whitespace-pre-line rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
					placeholder="You can use markdown here."
				/>
			</div>
			<p class="mt-2 text-sm text-gray-500">
				Brief description of your tool. URLs are hyperlinked.
			</p>
		</div>

		<label for="image" class="block text-sm font-medium text-gray-700">name</label>
		<div class="mt-1">
			<input
				type="link"
				name="image"
				id="image"
				autocomplete="image"
				bind:value={image}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<label for="link" class="block text-sm font-medium text-gray-700">name</label>
		<div class="mt-1">
			<input
				type="link"
				name="link"
				id="link"
				autocomplete="link"
				bind:value={link}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<button
			type="submit"
			class="text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
			>Ask ama</button
		>
	</form>
</div>
