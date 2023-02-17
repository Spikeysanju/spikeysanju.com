import { c as create_ssr_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"flex w-full flex-col items-center justify-center"}"><h1 class="${"flex w-full text-start tracking-tight"}">Photos.</h1>
	<p class="${"flex w-full text-gray-500"}">Some photos I&#39;ve taken over the years.</p>

	${data.user?.role === "ADMIN" ? `<div class="${"flex w-full"}"><button class="${"mt-4 rounded-sm bg-gray-100 px-3 py-2 font-medium text-black hover:cursor-pointer hover:bg-gray-200"}"><a href="${"/photos/new"}">Add a photo</a></button></div>` : ``}

	

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
