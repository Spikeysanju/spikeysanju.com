import { c as create_ssr_component, f as add_attribute } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let link = "";
  return `${$$result.head += `<!-- HEAD_svelte-1sy9nnd_START -->${$$result.title = `<title>Add IRL – Spikey Sanju</title>`, ""}<meta name="${"description"}" content="${"Add a new IRL to the gallery"}"><!-- HEAD_svelte-1sy9nnd_END -->`, ""}

<div class="${"flex w-full flex-col"}"><form action="${"?/create"}" method="${"post"}" class="${"flex w-full flex-col space-y-3"}"><label for="${"name"}" class="${"block text-sm font-medium text-gray-700"}">Name</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"name"}" id="${"name"}" autocomplete="${"name"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"}"${add_attribute("value", name, 0)}></div>

		<label for="${"link"}" class="${"block text-sm font-medium text-gray-700"}">Link</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"link"}" id="${"link"}" autocomplete="${"link"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"}"${add_attribute("value", link, 0)}></div>

		<label for="${"tags"}" class="${"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}">Flair</label>
		<select id="${"tags"}" name="${"tags"}" autocomplete="${"tags"}" class="${"flex w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"}"><option value="${"Brand"}">Brand</option><option value="${"Design"}">Design</option><option value="${"Craft"}">Craft</option><option value="${"Design Engineer"}">Design Engineer</option><option value="${"Indie Hacker"}">Indie Hacker</option></select>

		<button type="${"submit"}" class="${"text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"}">Add person</button></form></div>`;
});
export {
  Page as default
};
