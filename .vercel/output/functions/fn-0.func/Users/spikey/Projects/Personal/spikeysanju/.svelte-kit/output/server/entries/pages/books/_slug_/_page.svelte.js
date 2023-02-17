import { c as create_ssr_component, b as escape, d as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-14xe1zw_START -->${$$result.title = `<title>${escape(data.title)} – Spikey Sanju</title>`, ""}<meta name="${"description"}"${add_attribute("content", data.slug, 0)}><meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><meta property="${"og:description"}"${add_attribute("content", data.slug, 0)}><meta content="${escape(PUBLIC_WEBSITE_URL, true) + "/api/og?message=" + escape(data.title, true)}" property="${"og:image"}"><meta property="${"og:url"}"${add_attribute("content", data.slug, 0)}><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:site"}" content="${"@spikeysanju"}"><meta name="${"twitter:creator"}" content="${"@spikeysanju"}"><meta name="${"twitter:title"}"${add_attribute("content", data.title, 0)}><meta name="${"twitter:description"}"${add_attribute("content", data.slug, 0)}><meta name="${"twitter:image"}" content="${escape(PUBLIC_WEBSITE_URL, true) + "/api/og?message=" + escape(data.title, true)}"><!-- HEAD_svelte-14xe1zw_END -->`, ""}

<article><h1>${escape(data.title)}</h1>
	${data.image ? `<div class="${"flex w-full flex-col items-center justify-center"}"><img${add_attribute("src", data.image, 0)}${add_attribute("alt", data.title, 0)} class="${"mb-8 mt-8 h-96 shadow-lg"}">
			<span class="${"flex text-center text-gray-500"}">${escape(data.title)}</span></div>` : ``}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
