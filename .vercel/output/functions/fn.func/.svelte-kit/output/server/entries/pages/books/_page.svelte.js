import { c as create_ssr_component, a as escape, e as each, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../chunks/public.js";
import { B as BookCard } from "../../../chunks/BookCard.js";
import { h as capitalizeFirstLetter } from "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ao9mg4_START -->${$$result.title = `<title>Books | Spikey Sanju</title>`, ""}<meta name="description" content="Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few."><link rel="canonical" href="${escape(PUBLIC_WEBSITE_URL, true) + "/books"}"><meta name="robots" content="index, follow"><!-- HEAD_svelte-1ao9mg4_END -->`, ""} <section class="flex min-h-screen w-full flex-col items-center justify-start"><h1 class="flex w-full text-start tracking-tight" data-svelte-h="svelte-4dnreh">Books.</h1> <p class="flex w-full text-gray-500 dark:text-gray-400" data-svelte-h="svelte-7spw3f">Books I&#39;ve read and enjoyed. I&#39;ve tried to keep this list as up to date as possible, but I&#39;m
		sure I&#39;ve missed a few.</p> ${data.categories ? `<div class="mb-3 mt-3 flex w-full items-center space-x-3">${each(data.categories, (item) => {
    return `<a${add_attribute("href", `/books/categories/${item}`, 0)}><span class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200 dark:bg-purpleontop dark:text-white">${escape(capitalizeFirstLetter(item))}</span> </a>`;
  })}</div>` : ``} <div class="mt-6 grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">${each(data.books, (item) => {
    return `<a${add_attribute("href", `/books/${item.path}`, 0)}>${validate_component(BookCard, "BookCard").$$render(
      $$result,
      {
        title: item.meta.title,
        author: item.meta.author,
        image: item.meta.image
      },
      {},
      {}
    )} </a>`;
  })} ${data.books.length === 0 ? `<div class="flex h-full w-full flex-col items-center justify-center" data-svelte-h="svelte-azmv4p"><h2 class="text-2xl">No books found.</h2></div>` : ``}</div></section>`;
});
export {
  Page as default
};
