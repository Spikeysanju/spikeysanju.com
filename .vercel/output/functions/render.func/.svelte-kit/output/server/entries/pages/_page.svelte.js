import { c as create_ssr_component, d as add_attribute, a as escape, v as validate_component, e as each } from "../../chunks/index3.js";
import { P as PUBLIC_WEBSITE_URL } from "../../chunks/public.js";
import { I as Icon } from "../../chunks/Icon.js";
const MenuCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { href = "" } = $$props;
  let { icon = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `<di class="${"flex w-full flex-row items-center justify-between transition-all delay-75 ease-in-out hover:-rotate-1"}"><a class="${"delay-50 flex w-full items-center justify-between text-start text-2xl font-medium tracking-tight text-gray-900 transition-all hover:underline dark:text-white"}"${add_attribute("href", href, 0)}>${escape(name)}</a>

	<div>${validate_component(Icon, "Icon").$$render($$result, { width: "24", height: "24", name: icon }, {}, {})}</div></di>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      name: "About",
      href: "/about",
      icon: "about"
    },
    {
      name: "Blogs",
      href: "/blog",
      icon: "blog"
    },
    {
      name: "Projects",
      href: "/projects",
      icon: "projects"
    },
    {
      name: "Books",
      href: "/books",
      icon: "books"
    },
    {
      name: "Photos",
      href: "/photos",
      icon: "photos"
    },
    {
      name: "Tools",
      href: "/tools",
      icon: "tools"
    },
    { name: "Ama", href: "/ama", icon: "ama" },
    { name: "IRL", href: "/irl", icon: "irl" }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-7e88ni_START -->${$$result.title = `<title>Home | Spikey Sanju</title>`, ""}<meta name="${"description"}" content="${"Hi i'm Spikey Sanju, Designer & Engineer, Founder of THISUX Design Studio, where ADHD meets Innovation!"}"><link rel="${"canonical"}" href="${escape(PUBLIC_WEBSITE_URL, true) + "/"}"><meta name="${"robots"}" content="${"index, follow"}"><!-- HEAD_svelte-7e88ni_END -->`, ""}

<section class="${"flex min-h-screen flex-col items-center justify-center space-y-8"}"><div class="${"flex w-full max-w-6xl flex-col items-center justify-center space-y-8"}"><h1 class="${"text-3xl leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight"}">Hi i&#39;m Spikey Sanju, Designer &amp; Engineer, Founder of <a href="${"https://www.thisux.com"}" class="${"hover:underline"}">THISUX Design Studio
			</a>, where ADHD meets Innovation!
		</h1>

		<nav class="${"flex w-full flex-col items-center justify-between space-y-4"}">${each(links, (item) => {
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
