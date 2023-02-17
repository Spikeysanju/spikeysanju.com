import { c as create_ssr_component, b as escape, e as each, d as add_attribute, v as validate_component } from "../../../../../chunks/index3.js";
import { B as BookCard } from "../../../../../chunks/BookCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"flex w-full flex-col items-center justify-center"}"><h1 class="${"w-full text-start tracking-tight"}">${escape(data.params.category)} Blogs.</h1>

	<div class="${"mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.40),1fr))] gap-6"}">${each(data.books, (item) => {
    return `<a${add_attribute("href", `/books/${item.path}`, 0)}>${validate_component(BookCard, "BookCard").$$render(
      $$result,
      {
        title: item.meta.title,
        author: item.meta.author,
        image: item.meta.image
      },
      {},
      {}
    )}
			</a>`;
  })}

		${data.books.length === 0 ? `<div class="${"flex h-full w-full flex-col items-center justify-center"}"><h2 class="${"text-2xl"}">No books found.</h2></div>` : ``}</div></section>`;
});
export {
  Page as default
};
