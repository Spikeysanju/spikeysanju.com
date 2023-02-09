<script lang="ts">
	let name: string = '';
	let link: string = '';
	let tags: string = '';
</script>

<div class="flex w-full flex-col">
	<form action="?/create" method="post" class="flex w-full flex-col space-y-3">
		<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
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

		<label for="link" class="block text-sm font-medium text-gray-700">Link</label>
		<div class="mt-1">
			<input
				type="text"
				name="link"
				id="link"
				autocomplete="link"
				bind:value={link}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<label for="tags" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Flair</label>
		<select
			id="tags"
			name="tags"
			autocomplete="tags"
			bind:value={tags}
			class="flex w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
		>
			<option>Brand</option>
			<option>Design</option>
			<option>Craft</option>
			<option>Design Engineer</option>
			<option>Indie Hacker</option>
		</select>

		<button
			type="submit"
			class="text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
			>Add person</button
		>
	</form>
</div>
