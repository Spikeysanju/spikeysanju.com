import { c as create_ssr_component, a as escape, e as each, v as validate_component } from "../../chunks/ssr.js";
import { P as PUBLIC_WEBSITE_URL } from "../../chunks/public.js";
import { M as MenuCell } from "../../chunks/MenuCell.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Books", href: "/books" },
    { name: "Photos", href: "/photos" },
    { name: "Tools", href: "/tools" },
    { name: "Ama", href: "/ama" },
    // {
    // 	name: 'IRL',
    // 	href: '/irl'
    // },
    { name: "Links", href: "/links" }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-7e88ni_START -->${$$result.title = `<title>Home | Spikey Sanju</title>`, ""}<meta name="description" content="Hi i'm Spikey Sanju, Designer & Engineer, Founder of THISUX Design Studio, where ADHD meets Innovation!"><link rel="canonical" href="${escape(PUBLIC_WEBSITE_URL, true) + "/"}"><meta name="robots" content="index, follow"><!-- HEAD_svelte-7e88ni_END -->`, ""} <section class="flex min-h-screen flex-col items-center justify-center space-y-8"><div class="flex w-full max-w-6xl flex-col items-center justify-center space-y-8"><h1 class="text-3xl leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight" data-svelte-h="svelte-12nhxew">Hi i&#39;m Spikey Sanju, Designer &amp; Engineer, Founder of <a href="https://www.thisux.com" class="hover:underline">THISUX Design Studio
			</a>, where ADHD meets Innovation!</h1> <nav class="flex w-full flex-col items-center justify-between space-y-4">${each(links, (item) => {
    return `${validate_component(MenuCell, "MenuCell").$$render(
      $$result,
      {
        name: item.name,
        href: item.href,
        icon: "rightArrow"
      },
      {},
      {}
    )}`;
  })}</nav></div></section>`;
});
export {
  Page as default
};
