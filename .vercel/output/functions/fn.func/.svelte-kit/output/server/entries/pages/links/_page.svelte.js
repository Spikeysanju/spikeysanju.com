import { c as create_ssr_component, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { M as MenuCell } from "../../../chunks/MenuCell.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      name: "Twitter",
      href: "https://twitter.com/spikeysanju"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/spikeysanju/"
    },
    {
      name: "GitHub",
      href: "https://www.github.com/spikeysanju"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/spikeysanju"
    },
    {
      name: "Dribbble",
      href: "https://www.dribbble.com/spikeysanju"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/imspikeysanju"
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/spikeysanju"
    },
    {
      name: "Discord",
      href: "https://discord.gg/2Z8Y4Z8"
    },
    {
      name: "Twitch",
      href: "https://www.twitch.tv/spikeysanju"
    },
    {
      name: "Buy me a coffee",
      href: "https://www.buymeacoffee.com/spikeysanju"
    }
  ];
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="flex min-h-screen flex-col items-start justify-start space-y-8"><div class="flex w-full max-w-6xl flex-col items-start justify-center space-y-8"><h1 class="flex w-full text-start" data-svelte-h="svelte-a3iue0">Links.</h1> <nav class="flex w-full flex-col items-center justify-between space-y-4">${each(links, (item) => {
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
