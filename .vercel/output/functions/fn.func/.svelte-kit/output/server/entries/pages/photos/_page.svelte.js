import { c as create_ssr_component, b as subscribe, a as escape, e as each, d as add_attribute } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-w9ghtf_START -->${$$result.title = `<title>Photos | Spikey Sanju</title>`, ""}<meta name="description" content="Some photos I've taken over the years."><link rel="canonical" href="${escape(PUBLIC_WEBSITE_URL, true) + "/photos"}"><meta name="robots" content="index, follow"><!-- HEAD_svelte-w9ghtf_END -->`, ""} <section class="flex min-h-screen w-full flex-col items-center justify-start"><h1 class="flex w-full text-start tracking-tight" data-svelte-h="svelte-sobhsc">Photos.</h1> <p class="flex w-full text-gray-500 dark:text-gray-400" data-svelte-h="svelte-19ujaro">Some photos I&#39;ve taken over the years.</p> ${$page.data.session && data.currentUser?.role === "ADMIN" ? `<div class="mt-3 flex w-full" data-svelte-h="svelte-fmrhzg"><a href="photos/new" class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200">Add photo</a></div>` : ``}  <div class="mb-6 mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.60),1fr))] gap-6">${each(data.photos, (item) => {
    return `<a${add_attribute("href", `${item.url}`, 0)} class="text-gray-500 hover:text-black hover:underline dark:hover:text-white"><div class="flex flex-col items-center justify-center space-y-3"><img${add_attribute("src", `${item.url}`, 0)} class="aspect-auto object-cover"${add_attribute("alt", item.title, 0)}> <p class="flex w-full text-sm text-black dark:text-white">${escape(item.title)}</p></div> </a>`;
  })}</div></section>`;
});
export {
  Page as default
};
