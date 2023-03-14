import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, a as escape } from "../../chunks/index3.js";
import { t as themeStore, s as showLoginModal } from "../../chunks/store.js";
import { I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeStore, $$unsubscribe_themeStore;
  $$unsubscribe_themeStore = subscribe(themeStore, (value) => $themeStore = value);
  $$unsubscribe_themeStore();
  return `<nav class="${"flex w-full items-center justify-between py-3"}"><div class="${"flex w-full flex-row items-center justify-between"}"><a href="${"/"}" class="${"text-lg font-medium tracking-tight"}">Spikey Sanju;</a></div>

	
	<div>${$themeStore === "light" ? `${validate_component(Icon, "Icon").$$render($$result, { name: "day", width: "24", height: "24" }, {}, {})}` : `${validate_component(Icon, "Icon").$$render($$result, { name: "night", width: "24", height: "24" }, {}, {})}`}</div></nav>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_showLoginModal;
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => value);
  let { showModal = false } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$unsubscribe_showLoginModal();
  return `
<dialog class="${"inset-0 z-10 flex w-full max-w-2xl overflow-y-auto rounded-lg p-5 transition-all delay-75 ease-in-out backdrop:bg-black/50"}"${add_attribute("this", dialog, 0)}>${slots.default ? slots.default({}) : ``}

	<div class="${"space-y-3"}">${slots.header ? slots.header({}) : ``}
		${slots.content ? slots.content({}) : ``}
		${slots.cta ? slots.cta({}) : ``}</div></dialog>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $showLoginModal, $$unsubscribe_showLoginModal;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => $showLoginModal = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_showLoginModal();
  return `${$$result.head += `<!-- HEAD_svelte-6qg1fe_START --><script async defer data-website-id="${"ff21a4b4-b57f-40f5-904a-e6cc43a9be17"}" src="${"https://analytics.spikeysanju.com/umami.js"}"><\/script><meta name="${"theme-color"}" content="${"#000000"}"><meta name="${"msapplication-navbutton-color"}" content="${"#000000"}"><meta name="${"apple-mobile-web-app-capable"}" content="${"yes"}"><meta name="${"apple-mobile-web-app-status-bar-style"}" content="${"black-translucent"}"><!-- HEAD_svelte-6qg1fe_END -->`, ""}

<main class="${"mx-auto bg-white px-3 text-black dark:bg-deeppurple dark:text-white"}" data-sveltekit-preload-data="${"hover"}"><div class="${"mx-auto mt-3 max-w-2xl bg-white px-3 text-black dark:bg-deeppurple dark:text-white"}">${$page.data.session ? `${$page.data.session.user?.image ? `<div class="${"flex flex-row items-center justify-between"}"><div class="${"flex flex-row items-center space-x-3"}"><img${add_attribute("src", $page.data.session.user.image, 0)} class="${"h-9 w-9 rounded-full object-cover"}"${add_attribute("alt", $page.data.session.user.name, 0)}>

							<span><small>Signed in as</small><br>
								<strong>${escape($page.data.session.user?.name ?? "User")}</strong></span></div>

						<button class="${"button"}">Sign out</button></div>` : ``}` : `<button>Sign in with GitHub </button>`}

			<p id="${"lastvisit"}" class="${"text-gray-500 dark:text-gray-400"}">Last visit is from: ${escape(data.lastVisit.lastvisit?.city)}, ${escape(data.lastVisit?.lastvisit?.country)}</p>

			${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

			${$showLoginModal ? `${validate_component(Modal, "Modal").$$render($$result, { showModal: $showLoginModal }, {}, {
    cta: () => {
      return `<div slot="${"cta"}" class="${"flex w-full flex-col space-y-3"}"><button class="${"flex w-full items-center justify-center rounded-md bg-black px-2 py-2 font-medium text-white hover:bg-gray-900"}">Sign in with GitHub</button>

						<button class="${"flex w-full items-center justify-center rounded-md border border-gray-300 bg-gray-100 px-2 py-2 text-black hover:bg-gray-200"}">Close modal</button></div>`;
    },
    content: () => {
      return `<div slot="${"content"}" class="${"flex flex-col space-y-3"}"><p>In order to interact with the portfolio like asking questions, you need to sign in
							with GitHub.
						</p></div>`;
    },
    header: () => {
      return `<h3 slot="${"header"}">Welcome to Spikey&#39;s Portfolio</h3>`;
    }
  })}` : ``}

			${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  Layout as default
};
