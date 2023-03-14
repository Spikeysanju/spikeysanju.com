import { c as create_ssr_component, d as add_attribute, a as escape, b as subscribe, e as each, v as validate_component } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
const ToolCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { image } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="${"mt-6 flex w-full max-w-sm flex-col space-y-3"}"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="${"aspect-square"}">
	<h1 class="${"w-full text-center text-lg tracking-tight text-black dark:text-white"}">${escape(title)}</h1></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-coq9mb_START -->${$$result.title = `<title>Tools | Spikey Sanju</title>`, ""}<meta name="${"description"}" content="${"Tools I use on my day to day life."}"><!-- HEAD_svelte-coq9mb_END -->`, ""}

<section class="${"flex min-h-screen w-full flex-col items-center justify-start"}"><h1 class="${"flex w-full items-center justify-start"}">Tools.</h1>
	<p class="${"flex w-full text-gray-500 dark:text-gray-400"}">Here is my list of tools i use on my day to day life.
	</p>
	${$page.data.session && $page.data.session.user ? `<div class="${"mt-3 flex w-full"}"><a href="${"tools/new"}" class="${"rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"}">Add a tool</a></div>` : ``}

	<div class="${"mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.24),1fr))] gap-12"}">${each(data.tools, (item) => {
    return `<a${add_attribute("href", `/tools/${item.id}`, 0)}>${validate_component(ToolCard, "ToolCard").$$render($$result, { title: item.name, image: item.image }, {}, {})}
			</a>`;
  })}</div>

	${data.tools.length === 0 ? `<div class="${"flex h-full w-full flex-col items-center justify-center"}"><h2 class="${"text-2xl"}">No tools found.</h2></div>` : ``}</section>`;
});
export {
  Page as default
};
