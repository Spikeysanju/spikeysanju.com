import { c as create_ssr_component, a as escape, f as add_attribute, e as each, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-pa1gpa_START -->${$$result.title = `<title>${escape(data.title)} – Spikey Sanju</title>`, ""}<meta name="${"description"}"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-pa1gpa_END -->`, ""}

<article><h1>${escape(data.title)}</h1>
	${data.categories ? `<div class="${"mb-8 mt-3 flex w-full items-center space-x-3"}">${each(data.categories, (item) => {
    return `<a${add_attribute("href", `/blog/categories/${item}`, 0)}><span class="${"inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200"}">${escape(item)}</span>
				</a>`;
  })}</div>` : ``}
	${data.image ? `<img${add_attribute("src", data.image, 0)}${add_attribute("alt", data.title, 0)} class="${"mb-8 mt-8"}">` : ``}
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
