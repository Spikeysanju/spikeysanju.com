---
title: Why you should ship faster!
date: '2021-12-14'
categories:
  - 'design'
  - 'development'
  - 'engineering'
author: 'Spikey Sanju'
---

<script>
import CodeHeader from '$lib/components/codeheader/CodeHeader.svelte';
</script>

# Why Indie Hackers Need to Ship Faster

As an indie hacker, time is your most valuable resource. The faster you can get your product to market, the quicker you can start gaining traction and making money. But why is shipping fast so important?

### Faster Feedback

When you ship fast, you get feedback from your users faster. This feedback can help you improve your product and make it more valuable to your customers. With each iteration, your product becomes better, and you can continue to gain more customers and make more money.

### Beat the Competition

The faster you ship, the faster you can start making money. This means that you can use that money to improve your product and beat the competition. If you're the first to market with a new product or feature, you have a huge advantage over your competitors.

### Learn from Mistakes

When you ship fast, you will inevitably make mistakes. But that's okay! Mistakes are a natural part of the process and can help you learn and improve. The faster you ship, the faster you can learn from your mistakes and make your product better.

### Conclusion

Shipping fast is crucial for indie hackers. It allows you to get feedback faster, beat the competition, and learn from mistakes. Don't let perfectionism hold you back from shipping your product. Remember, done is better than perfect.

<CodeHeader title="🖥️ Terminal – src > lib > posts"/>

```ts
// Signup page -> loading actions with formactions
<script lang="ts">
	import { enhance } from '$app/forms';
	import Icon from '$lib/components/icon/Icon.svelte';
	import { clsx } from '$lib/utils/clsx';
	import { showToast } from '$lib/utils/toast';
	import { Toaster } from 'svelte-french-toast';
	import type { PageData } from './$types';

    let loading = false;
    let email = '';
    export let data: PageData;

    $: isEmailEmpty = email.trim() === '';

</script>

<svelte:head>

<title>Login</title>
<meta name="description" content="Login to abogrow" />
</svelte:head>

<section
	class="container mx-auto mt-8 max-w-4xl space-y-6 bg-white p-8 shadow-xl shadow-gray-500/5"
>
	<Toaster />
	<div class="flex flex-col space-y-2">
		<h1 class="text-2xl font-medium tracking-tight text-gray-900">Welcome to Abogrow</h1>
		<p>Sign in via magic link with your email below</p>
	</div>

    <form
    	class="mb-6  flex-col space-y-3"
    	method="POST"
    	use:enhance={({ form }) => {
    		return async ({ result, update }) => {
    			// `result` is an `ActionResult` object
    			// `update` is a function which triggers the logic that would be triggered if this callback wasn't set

    			// if the form is submitted successfully, show the confetti
    			if (result.type === 'success') {
    				// reset the form
    				form.reset();

    				// if formdata poststatus is draft, show draft toast
    				if (result?.data?.succcess) {
    					showToast('Magic link sent successfully', 'success');
    				}
    			}

    			// if the form is submitted with errors, show the toast
    			if (result.type === 'error') {
    				showToast('Something went wrong!', 'error');
    			}

    			// update the form
    			update();
    		};
    	}}
    >
    	<label for="email" class="mb-2 block text-sm font-medium text-slate-900">Email address</label>
    	<input
    		type="email"
    		name="email"
    		class="focus:ring-firey-orange focus:border-firey-orange block w-full border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900"
    		placeholder="john.doe@company.com"
    		bind:value={email}
    		disabled={loading}
    		required
    	/>

    	<button
    		class={clsx(
    			'inline-flex  items-center bg-primary px-4  py-2 font-medium text-white shadow-md shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed'
    		)}
    		disabled={isEmailEmpty || loading}
    		formaction="?/login"
    	>
    		{#if loading}
    			<div class="mr-3 animate-spin">
    				<Icon width="20" height="20" name={'spinner'} />
    			</div>
    		{/if}

    		{loading ? 'Sending...' : 'Send magic link'}</button
    	>
    </form>

</section>
```
