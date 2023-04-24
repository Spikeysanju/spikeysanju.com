<script lang="ts">
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';
	import Embedd from '$lib/components/embed/Embedd.svelte';
	import Link from '$lib/components/markdown/Link.svelte';
	import Quote from '$lib/components/quote/Quote.svelte';
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Markdown from 'svelte-exmarkdown';

	export let data: PageData;
</script>

<svelte:head>
	<title>About | Spikey Sanju</title>
	<meta name="description" content={data.description} />

	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/about" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="flex flex-col gap-6">
	<h1
		class="text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-snug lg:text-4xl lg:leading-tight"
	>
		Meet Spikey Sanju: Designer, Engineer, and ADHD-Inspired Innovator!
	</h1>

	<div class="whitespace-pre-line">
		<SvelteMarkdown
			source="
Hey there, I'm Sanju, and people often ask me what I do. I tell them that I'm a designer and an engineer, which essentially means I practice **UXE (User Experience Engineering)**. My passion is designing and building things that make people's lives easier. 

From a young age, I've been self-taught in the field of design and development. I have a deep love for learning and always seek out new challenges to improve my skills. I'm particularly enthusiastic about open-source projects and have contributed a lot to the community.

My passion for open-source led me to create numerous open-source projects that have helped many people. One of my significant accomplishments was becoming a **Google Developer Expert in Android**. I have the expertise to create amazing things for Android devices and have even contributed to the **Android Open Source Project (AOSP)**.

It's a huge achievement in my field, and I'm particularly proud of it. In addition to these pursuits, I'm the founder of a design studio called **THISUX**, where I work hard to create designs that can change the world. Currently, I'm also building two SaaS products, [SticAI](https://www.sticai.com) and [AboGrow](https://www.abogrow.com), which aim to help people make their lives more comfortable. 

I believe that any idea, no matter how small or big, can change the world. I'm passionate about making a difference in people's lives through innovative and creative ideas. My love for design and engineering drives me to work tirelessly towards realizing these goals.

You can find me here [Link to all my social media accounts](https://www.spikeysanju.com/links). Feel free to reach out to me if you have any questions or want to collaborate on a project.
"
			renderers={{
				link: Link,
				html: Embedd
			}}
		/>

		<!-- <Embedd /> -->
	</div>
</section>
