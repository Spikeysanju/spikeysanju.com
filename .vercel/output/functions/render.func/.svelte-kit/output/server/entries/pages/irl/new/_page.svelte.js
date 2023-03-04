import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index3.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let link = "";
  return `${$$result.head += `<!-- HEAD_svelte-1sy9nnd_START -->${$$result.title = `<title>Add IRL – Spikey Sanju</title>`, ""}<meta name="${"description"}" content="${"Add a new IRL to the gallery"}"><!-- HEAD_svelte-1sy9nnd_END -->`, ""}

<section class="${"flex min-h-screen w-full flex-col items-center justify-start"}"><form action="${"?/create"}" method="${"post"}" class="${"flex w-full flex-col space-y-3"}"><label for="${"name"}" class="${"block text-sm font-medium text-gray-700 dark:text-gray-200"}">Name</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"name"}" id="${"name"}" autocomplete="${"name"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"}"${add_attribute("value", name, 0)}></div>

		<label for="${"link"}" class="${"block text-sm font-medium text-gray-700 dark:text-gray-200"}">Link</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"link"}" id="${"link"}" autocomplete="${"link"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"}"${add_attribute("value", link, 0)}></div>

		<label for="${"tags"}" class="${"block text-sm font-medium text-gray-700 dark:text-gray-200"}">Flair</label>
		<select id="${"tags"}" name="${"tags"}" autocomplete="${"tags"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"}"><option value="${"Brand"}">Brand</option><option value="${"Design"}">Design</option><option value="${"Craft"}">Craft</option><option value="${"Design Engineer"}">Design Engineer</option><option value="${"Indie Hacker"}">Indie Hacker</option></select>

		<button type="${"submit"}" class="${"text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black dark:focus:ring-white"}">Add person</button></form></section>`;
});
export {
  Page as default
};
