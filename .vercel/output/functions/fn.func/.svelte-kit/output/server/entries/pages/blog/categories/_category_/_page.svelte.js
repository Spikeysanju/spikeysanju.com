import { c as create_ssr_component, a as escape, e as each, d as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { B as BlogCard } from "../../../../../chunks/BlogCard.js";
import { h as capitalizeFirstLetter } from "../../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ventce_START -->${$$result.title = `<title>${escape(`Blogs in ${data.category}`)} | Spikey Sanju</title>`, ""}<meta name="description" content="I write about web development, programming, and other stuff. I also write about my personal life."><!-- HEAD_svelte-1ventce_END -->`, ""} <section class="flex min-h-screen w-full flex-col items-center justify-start"><h1 class="w-full text-start tracking-tight">${escape(capitalizeFirstLetter(data.params.category))} Blogs.</h1> <div class="mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6">${each(data.posts, (item) => {
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
  })} ${data.posts.length === 0 ? `<div class="flex h-full w-full flex-col items-center justify-center" data-svelte-h="svelte-1kgatdo"><h2 class="text-2xl">No blogs found.</h2></div>` : ``}</div></section>`;
});
export {
  Page as default
};
