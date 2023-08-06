<script lang="ts">
	import { Tweet, Spotify } from 'sveltekit-embed';
	export let tweetLink: string;
</script>

<span class="flex w-full flex-col">
	<Tweet tweetLink={tweetLink} />
	<Spotify spotifyLink="show/4XPl3uEEL9hvqMkoZrzbx5" />
</span>
