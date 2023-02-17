import { c as create_ssr_component, d as add_attribute, b as escape, e as each, v as validate_component } from "../../../chunks/index3.js";
const ToolCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { image } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="${"mt-6 flex w-full max-w-sm flex-col space-y-3"}"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="${"aspect-square"}">
	<h1 class="${"w-full text-center text-lg tracking-tight text-black"}">${escape(title)}</h1></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section><h1>Tools.</h1>
	<p class="${"flex w-full text-gray-500"}">Here is my list of tools i use on my day to day life.</p>

	<div class="${"mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.24),1fr))] gap-12"}">${each(data.tools, (item) => {
    return `<a${add_attribute("href", `/tools/${item.id}`, 0)}>${validate_component(ToolCard, "ToolCard").$$render($$result, { title: item.name, image: item.image }, {}, {})}
			</a>`;
  })}

		${data.tools.length === 0 ? `<div class="${"flex h-full w-full flex-col items-center justify-center"}"><h2 class="${"text-2xl"}">No tools found.</h2>

				<a href="${"/tools/new"}" class="${"mt-4"}"><button class="${"btn btn-primary"}">Add a tool</button></a></div>` : ``}</div></section>`;
});
export {
  Page as default
};
