import { c as create_ssr_component, a as escape, d as add_attribute, e as each, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../../chunks/public.js";
import { h as capitalizeFirstLetter } from "../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-160nqay_START -->${$$result.title = `<title>Book Review: ${escape(data.title)} | Spikey Sanju</title>`, ""}<meta name="${"description"}"${add_attribute("content", data.excerpt, 0)}><meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><meta property="${"og:image"}" content="${escape(PUBLIC_WEBSITE_URL, true) + "/api/og?message=" + escape(data.excerpt, true) + "&title=" + escape(data.title, true)}"><meta property="${"og:description"}"${add_attribute("content", data.excerpt, 0)}><meta property="${"og:url"}" content="${escape(PUBLIC_WEBSITE_URL, true) + "/books/" + escape(data.slug, true)}"><meta property="${"og:type"}" content="${"article"}"><meta property="${"og:site_name"}" content="${"Spikey Sanju"}"><meta property="${"og:locale"}" content="${"en_UK"}"><meta property="${"article:author"}" content="${"Spikey Sanju"}"><meta property="${"article:published_time"}"${add_attribute("content", data.date, 0)}><meta property="${"article:modified_time"}"${add_attribute("content", data.date, 0)}><meta property="${"article:section"}" content="${"books"}"><meta name="${"article:tag"}"${add_attribute("content", data.categories, 0)}><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:site"}" content="${"@spikeysanju"}"><meta name="${"twitter:creator"}" content="${"@spikeysanju"}"><meta name="${"twitter:title"}"${add_attribute("content", data.title, 0)}><meta name="${"twitter:description"}"${add_attribute("content", data.slug, 0)}><meta name="${"twitter:image"}" content="${escape(PUBLIC_WEBSITE_URL, true) + "/api/og?message=" + escape(data.excerpt, true) + "&title=" + escape(data.title, true)}"><meta property="${"twitter:url"}" content="${escape(PUBLIC_WEBSITE_URL, true) + "/books/" + escape(data.slug, true)}"><link rel="${"canonical"}" href="${escape(PUBLIC_WEBSITE_URL, true) + "/books/" + escape(data.slug, true)}"><meta name="${"robots"}" content="${"index, follow"}"><!-- HEAD_svelte-160nqay_END -->`, ""}

<article><h1>${escape(data.title)}</h1>
	${data.categories ? `<div class="${"mb-8 mt-3 flex w-full items-center space-x-3"}">${each(data.categories, (item) => {
    return `<a${add_attribute("href", `/books/categories/${item}`, 0)}><span class="${"inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200 dark:bg-purpleontop dark:text-white"}">${escape(capitalizeFirstLetter(item))}</span>
				</a>`;
  })}</div>` : ``}
	${data.image ? `<div class="${"flex w-full flex-col items-center justify-center"}"><img${add_attribute("src", data.image, 0)}${add_attribute("alt", data.title, 0)} class="${"mb-8 mt-8 h-96 shadow-lg"}">
			<span class="${"flex text-center text-gray-500"}">${escape(data.title)}</span></div>` : ``}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
