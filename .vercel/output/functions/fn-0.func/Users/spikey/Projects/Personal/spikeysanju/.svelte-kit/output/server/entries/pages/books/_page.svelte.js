import { c as create_ssr_component, e as each, d as add_attribute, b as escape, v as validate_component } from "../../../chunks/index3.js";
import { B as BookCard } from "../../../chunks/BookCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"flex w-full flex-col items-center justify-center"}"><h1 class="${"flex w-full text-start tracking-tight"}">Books.</h1>
	<p class="${"flex w-full text-gray-500"}">Books I&#39;ve read and enjoyed. I&#39;ve tried to keep this list as up to date as possible, but I&#39;m
		sure I&#39;ve missed a few.
	</p>

	${data.categories ? `<div class="${"mb-3 mt-3 flex w-full items-center space-x-3"}">${each(data.categories, (item) => {
    return `<a${add_attribute("href", `/books/categories/${item}`, 0)}><span class="${"inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800"}">${escape(item)}</span>
				</a>`;
  })}</div>` : ``}

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
