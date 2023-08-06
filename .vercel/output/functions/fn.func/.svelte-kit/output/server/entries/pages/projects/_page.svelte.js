import { c as create_ssr_component, a as escape, e as each, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../chunks/public.js";
import { B as BlogCard } from "../../../chunks/BlogCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-x5q97z_START -->${$$result.title = `<title>Projects | Spikey Sanju</title>`, ""}<meta name="description" content="Projects I've worked on."><link rel="canonical" href="${escape(PUBLIC_WEBSITE_URL, true) + "/projects"}"><meta name="robots" content="index, follow"><!-- HEAD_svelte-x5q97z_END -->`, ""} <section class="flex min-h-screen w-full flex-col items-center justify-start"><h1 class="flex w-full text-start tracking-tight" data-svelte-h="svelte-1thx5cz">Projects.</h1> <p class="flex w-full text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1r92eix">Here are some of the projects I&#39;ve worked on.</p> <div class="mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6">${each(data.projects, (item) => {
    return `<a${add_attribute("href", `/projects/${item.path}`, 0)}>${validate_component(BlogCard, "BlogCard").$$render(
      $$result,
      {
        title: item.meta.title,
        author: item.meta.author,
        image: item.meta.image
      },
      {},
      {}
    )} </a>`;
  })} ${data.projects.length === 0 ? `<div class="flex h-full w-full flex-col items-center justify-center" data-svelte-h="svelte-w0r2tb"><h2 class="text-2xl">No projects found.</h2></div>` : ``}</div></section>`;
});
export {
  Page as default
};
