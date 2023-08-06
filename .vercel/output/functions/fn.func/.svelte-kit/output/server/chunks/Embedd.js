import { c as create_ssr_component, l as createEventDispatcher, d as add_attribute, v as validate_component } from "./ssr.js";
import { T as Tweet } from "./tweet.js";
const General_observer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { height = "100" } = $$props;
  let { width = "100" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return `<div>${`<div class="flex justify-center mb-12"${add_attribute("style", `height:${height}px;width: 100%`, 0)}></div>`}</div>`;
});
const Spotify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spotifyLink = "" } = $$props;
  let { width = "320" } = $$props;
  let { height = "380" } = $$props;
  if ($$props.spotifyLink === void 0 && $$bindings.spotifyLink && spotifyLink !== void 0)
    $$bindings.spotifyLink(spotifyLink);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `${validate_component(General_observer, "GeneralObserver").$$render($$result, { height, width }, {}, {
    default: () => {
      return `<iframe data-testid="spotify"${add_attribute("title", `spotify-${spotifyLink}`, 0)} class="spotify-sveltekit-embed"${add_attribute("src", `https://open.spotify.com/embed/${spotifyLink}`, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} frameborder="0" allow="encrypted-media"></iframe>`;
    }
  })}`;
});
const Embedd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tweetLink } = $$props;
  if ($$props.tweetLink === void 0 && $$bindings.tweetLink && tweetLink !== void 0)
    $$bindings.tweetLink(tweetLink);
  return `<span class="flex w-full flex-col">${validate_component(Tweet, "Tweet").$$render($$result, { tweetLink }, {}, {})} ${validate_component(Spotify, "Spotify").$$render(
    $$result,
    {
      spotifyLink: "show/4XPl3uEEL9hvqMkoZrzbx5"
    },
    {},
    {}
  )}</span>`;
});
export {
  Embedd as E
};
