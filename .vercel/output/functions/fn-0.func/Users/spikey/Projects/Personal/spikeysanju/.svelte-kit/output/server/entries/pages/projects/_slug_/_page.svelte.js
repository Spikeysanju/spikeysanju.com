import { c as create_ssr_component, b as escape, d as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-17p3aco_START -->${$$result.title = `<title>${escape(data.title)} – Spikey Sanju</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-17p3aco_END -->`, ""}

<article><h1>${escape(data.title)}</h1>
	${data.image ? `<img${add_attribute("src", data.image, 0)}${add_attribute("alt", data.title, 0)} class="${"mb-8 mt-8"}">` : ``}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
