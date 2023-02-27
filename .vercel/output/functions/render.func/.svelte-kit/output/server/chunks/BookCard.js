import { c as create_ssr_component, f as add_attribute, a as escape } from "./index3.js";
const BookCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { author } = $$props;
  let { image } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<article class="${"flex w-full max-w-sm flex-col transition-all ease-linear hover:-rotate-3"}"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="${"aspect-auto shadow-lg"}">

	<div class="${"space-y mt-3 mb-3 flex w-full flex-col space-y-2"}"><h1 class="${"-mb-2 truncate text-lg tracking-tight text-black"}">${escape(title)}</h1>
		<p class="${"text-base text-gray-500"}">${escape(author)}</p></div></article>`;
});
export {
  BookCard as B
};
