import { c as create_ssr_component, a as escape, e as each, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogCard } from "../../../chunks/BlogCard.js";
import { h as capitalizeFirstLetter } from "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-94pe3n_START -->${$$result.title = `<title>Blogs | Spikey Sanju</title>`, ""}<meta name="description" content="I write about web development, programming, and other stuff. I also write about my personal life."><!-- HEAD_svelte-94pe3n_END -->`, ""} <section class="flex min-h-screen w-full flex-col items-center justify-start"><h1 class="w-full text-start tracking-tight" data-svelte-h="svelte-wn1uig">Blog.</h1> <p class="w-full text-start text-gray-500 dark:text-gray-400">${escape(data.blogs.length)} ${escape(data.blogs.length === 1 ? "post" : "posts")}</p> ${data.categories ? `<div class="mb-3 mt-3 flex w-full items-center space-x-3">${each(data.categories, (item) => {
    return `<a${add_attribute("href", `/blog/categories/${item}`, 0)}><span class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200 dark:bg-purpleontop dark:text-white">${escape(capitalizeFirstLetter(item))}</span> </a>`;
  })}</div>` : ``} <div class="mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6">${each(data.blogs, (item) => {
    return `<a${add_attribute("href", `/blog/${item.path}`, 0)}>${validate_component(BlogCard, "BlogCard").$$render(
      $$result,
      {
        title: item.meta.title,
        author: item.meta.author,
        image: item.meta.image
      },
      {},
      {}
    )} </a>`;
  })} ${data.blogs.length === 0 ? `<div class="flex h-full w-full flex-col items-center justify-center" data-svelte-h="svelte-1kgatdo"><h2 class="text-2xl">No blogs found.</h2></div>` : ``}</div></section>`;
});
export {
  Page as default
};
