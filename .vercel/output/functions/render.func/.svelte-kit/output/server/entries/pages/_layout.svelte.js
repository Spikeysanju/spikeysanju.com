import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, a as escape } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
import { inject } from "@vercel/analytics";
const app = "";
const themeStore = writable("light");
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeStore, $$unsubscribe_themeStore;
  $$unsubscribe_themeStore = subscribe(themeStore, (value) => $themeStore = value);
  $$unsubscribe_themeStore();
  return `<nav class="${"flex w-full items-center justify-between py-3"}"><div class="${"flex w-full flex-row items-center justify-between"}"><a href="${"/"}" class="${"text-lg font-medium tracking-tight"}">Spikey Sanju;</a></div>

	
	<div>${$themeStore === "light" ? `${validate_component(Icon, "Icon").$$render($$result, { name: "day", width: "24", height: "24" }, {}, {})}` : `${validate_component(Icon, "Icon").$$render($$result, { name: "night", width: "24", height: "24" }, {}, {})}`}</div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  inject({
    mode: "production",
    debug: true
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-6qg1fe_START --><script async defer data-website-id="${"ff21a4b4-b57f-40f5-904a-e6cc43a9be17"}" src="${"https://analytics.spikeysanju.com/umami.js"}"><\/script><meta name="${"theme-color"}" content="${"#000000"}"><meta name="${"msapplication-navbutton-color"}" content="${"#000000"}"><meta name="${"apple-mobile-web-app-capable"}" content="${"yes"}"><meta name="${"apple-mobile-web-app-status-bar-style"}" content="${"black-translucent"}"><!-- HEAD_svelte-6qg1fe_END -->`, ""}

<main class="${"mx-auto bg-white px-3 text-black dark:bg-deeppurple dark:text-white"}" data-sveltekit-preload-data="${"hover"}"><div class="${"mx-auto max-w-2xl bg-white px-3 text-black dark:bg-deeppurple dark:text-white"}">${$page.data.session ? `${$page.data.session.user?.image ? `<div class="${"flex flex-row items-center justify-between"}"><div class="${"flex flex-row items-center space-x-3"}"><img${add_attribute("src", $page.data.session.user.image, 0)} class="${"h-9 w-9 rounded-full object-cover"}"${add_attribute("alt", $page.data.session.user.name, 0)}>

							<span><small>Signed in as</small><br>
								<strong>${escape($page.data.session.user?.name ?? "User")}</strong></span></div>

						<button class="${"button"}">Sign out</button></div>` : ``}` : `<button>Sign in with GitHub </button>`}

			${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

			${``}

			${slots.default ? slots.default({}) : ``}</div></main>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Layout as default
};
