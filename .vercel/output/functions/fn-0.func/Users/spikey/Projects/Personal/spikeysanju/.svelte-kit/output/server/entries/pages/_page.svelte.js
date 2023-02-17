import { c as create_ssr_component, d as add_attribute, b as escape, e as each, v as validate_component } from "../../chunks/index3.js";
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
  return `<a class="${"delay-50 flex w-full items-center justify-between text-start text-2xl font-semibold tracking-tight text-gray-900 transition-all hover:underline"}"${add_attribute("href", href, 0)}>${escape(name)}
	<p class="${"hover:translate-x-3"}">→</p></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"flex h-screen flex-col items-center justify-center space-y-8"}"><div class="${"flex w-full max-w-6xl flex-col items-center justify-center space-y-8"}"><h1 class="${"text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight"}">Hi i&#39;m Spikey Sanju, Designer &amp; Engineer, Founder of <a href="${"https://www.thisux.com"}" class="${"hover:underline"}">THISUX Design Studio
			</a>, where ADHD meets Innovation!
		</h1>

		<div class="${"flex w-full flex-col items-center justify-between space-y-4"}">${each(links, (item) => {
    return `${validate_component(MenuCell, "MenuCell").$$render($$result, { name: item.name, href: item.href }, {}, {})}`;
  })}</div></div></section>`;
});
export {
  Page as default
};
