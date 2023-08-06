import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const gist_svelte_svelte_type_style_lang = "";
const Tweet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tweetLink = "" } = $$props;
  if ($$props.tweetLink === void 0 && $$bindings.tweetLink && tweetLink !== void 0)
    $$bindings.tweetLink(tweetLink);
  return `${$$result.head += `<!-- HEAD_svelte-g231es_START --><script async src="https://platform.twitter.com/widgets.js" charset="utf-8" data-svelte-h="svelte-oj0l9"><\/script><!-- HEAD_svelte-g231es_END -->`, ""} <div class="flex justify-center mb-12"><blockquote class="twitter-tweet"><a class="twitter-tweet"${add_attribute("href", `https://twitter.com/${tweetLink}`, 0)}>Loading Tweet...</a></blockquote></div>`;
});
export {
  Tweet as T
};
