import { c as create_ssr_component, b as escape, d as add_attribute, e as each, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-4fd413_START -->${$$result.title = `<title>${escape(data.title)} – Spikey Sanju</title>`, ""}<meta name="${"description"}"${add_attribute("content", data.content, 0)}><meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><meta content="${escape(PUBLIC_WEBSITE_URL, true) + "/api/og?message=" + escape(data.title, true)}" property="${"og:image"}"><meta property="${"og:description"}"${add_attribute("content", data.slug, 0)}><meta property="${"og:url"}"${add_attribute("content", data.slug, 0)}><meta property="${"og:type"}" content="${"article"}"><meta property="${"og:site_name"}" content="${"Spikey Sanju"}"><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:site"}" content="${"@spikeysanju"}"><meta name="${"twitter:creator"}" content="${"@spikeysanju"}"><meta name="${"twitter:title"}"${add_attribute("content", data.title, 0)}><meta name="${"twitter:description"}"${add_attribute("content", data.slug, 0)}><meta name="${"twitter:image"}" content="${escape(PUBLIC_WEBSITE_URL, true) + "/api/og?message=" + escape(data.title, true)}"><!-- HEAD_svelte-4fd413_END -->`, ""}

<article><h1>${escape(data.title)}</h1>
	${data.categories ? `<div class="${"mb-8 mt-3 flex w-full items-center space-x-3"}">${each(data.categories, (item) => {
    return `<a${add_attribute("href", `/blog/categories/${item}`, 0)}><span class="${"inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800"}">${escape(item)}</span>
				</a>`;
  })}</div>` : ``}
	${data.image ? `<img${add_attribute("src", data.image, 0)}${add_attribute("alt", data.title, 0)} class="${"mb-8 mt-8"}">` : ``}

	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
