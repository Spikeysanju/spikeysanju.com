<script lang="ts">
	import { fly } from 'svelte/transition';
	import { showLoginModal } from '$lib/store/store';
	import { signIn } from '@auth/sveltekit/client';

	let dialog: HTMLDialogElement;
	$: if (dialog && $showLoginModal) dialog.showModal();
	else if (dialog && !$showLoginModal) dialog.close();
</script>

<dialog
	transition:fly={{ duration: 150, opacity: 0, x: 0, y: 100 }}
	bind:this={dialog}
	on:close={() => {
		$showLoginModal = false;
	}}
	on:click|self={() => {
		$showLoginModal = false;
		dialog.close();
	}}
	on:keydown|self={(e) => {
		if (e.key === 'Escape') {
			$showLoginModal = false;
			dialog.close();
		}
	}}
	class="shadow-3xl z-10 w-full max-w-xl items-center justify-center rounded-lg border border-gray-200 backdrop:bg-white/20 backdrop:backdrop-blur-sm  open:scale-100 open:transition-transform open:duration-300 open:ease-out"
>
	<div
		on:click|stopPropagation
		class="flex w-full flex-col space-y-6"
		on:keydown|self={(e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				e.stopPropagation();
			}
		}}
	>
		<h3>Welcome to Spikey's Portfolio</h3>
		<div class="flex flex-col space-y-3">
			<p>
				In order to interact with the portfolio like asking questions, you need to sign in with
				GitHub.
			</p>
		</div>

		<div class="flex w-full flex-col space-y-3">
			<button
				on:click={() => signIn()}
				class="flex w-full items-center justify-center rounded-md bg-black px-2 py-2 font-medium text-white hover:bg-gray-900"
				>Sign in with GitHub</button
			>

			<!-- <button
				class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-gray-100 px-2 py-2 text-black hover:bg-gray-200"
				on:click={() => ($showLoginModal = false)}>Close modal</button
			> -->
		</div>
	</div>
</dialog>
