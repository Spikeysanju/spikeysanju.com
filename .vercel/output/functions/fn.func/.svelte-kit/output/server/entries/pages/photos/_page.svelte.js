import { c as create_ssr_component, h as subscribe, b as escape, e as each, d as add_attribute } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-q4m9hi_START -->${$$result.title = `<title>Photos – Spikey Sanju</title>`, ""}<meta name="${"description"}" content="${"Some photos I've taken over the years."}"><link rel="${"canonical"}" href="${escape(PUBLIC_WEBSITE_URL, true) + "/photos"}"><meta name="${"robots"}" content="${"index, follow"}"><!-- HEAD_svelte-q4m9hi_END -->`, ""}

<section class="${"flex w-full flex-col items-center justify-center"}"><h1 class="${"flex w-full text-start tracking-tight"}">Photos.</h1>
	<p class="${"flex w-full text-gray-500"}">Some photos I&#39;ve taken over the years.</p>

	${$page.data.session && $page.data.session.user ? `<div class="${"mt-3 flex w-full"}"><a href="${"photos/new"}" class="${"rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"}">Add photo</a></div>` : ``}
	

	<div class="${"mt-6 mb-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.60),1fr))] gap-6"}">${each(data.photos, (item) => {
    return `<a${add_attribute("href", `${item.url}`, 0)} class="${"text-gray-500 hover:text-black hover:underline"}"><div class="${"flex flex-col items-center justify-center space-y-3"}"><img${add_attribute("src", `${item.url}`, 0)} class="${"aspect-auto object-cover"}"${add_attribute("alt", item.title, 0)}>
					<p class="${"flex w-full text-sm"}">${escape(item.title)}</p></div>
			</a>`;
  })}

		${data.photos.length === 0 ? `<div class="${"flex h-full w-full flex-col items-center justify-center"}"><h2 class="${"text-2xl"}">No photos found.</h2></div>` : ``}</div></section>`;
});
export {
  Page as default
};
