<script lang="ts">
	let question: string = '';
	let description: string = '';
	let flair: string = '';
</script>

<svelte:head>
	<title>New Ama – Spikey Sanju</title>
	<meta name="description" content="Ask me anything." />
</svelte:head>

<div class="flex w-full flex-col">
	<form action="?/create" method="post" class="flex w-full flex-col space-y-3">
		<label for="question" class="block text-sm font-medium text-gray-700">Question</label>
		<div class="mt-1">
			<input
				type="text"
				name="question"
				id="question"
				autocomplete="question"
				bind:value={question}
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
				Brief description of your question. URLs are hyperlinked.
			</p>
		</div>

		<label for="flair" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Flair</label
		>
		<select
			id="flair"
			name="flair"
			autocomplete="flair"
			bind:value={flair}
			class="flex w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
		>
			<option>Android Development</option>
			<option>Backend Development</option>
			<option>Entrepreneurship</option>
			<option>Finance</option>
			<option>Fullstack Development</option>
			<option>iOS Development</option>
			<option>Marketing</option>
			<option>Other</option>
			<option>Product Management</option>
			<option>Software Development</option>
			<option>UI/UX Design</option>
			<option>Web Development</option>
		</select>

		<button
			data-sveltekit-preload-data="hover"
			type="submit"
			class="text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
			>Ask ama</button
		>
	</form>
</div>
