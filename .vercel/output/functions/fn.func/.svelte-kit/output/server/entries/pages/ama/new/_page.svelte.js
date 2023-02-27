import { c as create_ssr_component, f as add_attribute } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let question = "";
  return `${$$result.head += `<!-- HEAD_svelte-1yw7dou_START -->${$$result.title = `<title>New Ama – Spikey Sanju</title>`, ""}<meta name="${"description"}" content="${"Ask me anything."}"><!-- HEAD_svelte-1yw7dou_END -->`, ""}

<div class="${"flex w-full flex-col"}"><form action="${"?/create"}" method="${"post"}" class="${"flex w-full flex-col space-y-3"}"><label for="${"question"}" class="${"block text-sm font-medium text-gray-700"}">Question</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"question"}" id="${"question"}" autocomplete="${"question"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"}"${add_attribute("value", question, 0)}></div>

		<div><label for="${"description"}" class="${"block text-sm font-medium text-gray-700"}">Description</label>
			<div class="${"mt-1"}"><textarea id="${"description"}" name="${"description"}" rows="${"3"}" class="${"mt-1 block w-full whitespace-pre-line rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"}" placeholder="${"You can use markdown here."}">${""}</textarea></div>
			<p class="${"mt-2 text-sm text-gray-500"}">Brief description of your question. URLs are hyperlinked.
			</p></div>

		<label for="${"flair"}" class="${"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}">Flair</label>
		<select id="${"flair"}" name="${"flair"}" autocomplete="${"flair"}" class="${"flex w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"}"><option value="${"Android Development"}">Android Development</option><option value="${"Backend Development"}">Backend Development</option><option value="${"Entrepreneurship"}">Entrepreneurship</option><option value="${"Finance"}">Finance</option><option value="${"Fullstack Development"}">Fullstack Development</option><option value="${"iOS Development"}">iOS Development</option><option value="${"Marketing"}">Marketing</option><option value="${"Other"}">Other</option><option value="${"Product Management"}">Product Management</option><option value="${"Software Development"}">Software Development</option><option value="${"UI/UX Design"}">UI/UX Design</option><option value="${"Web Development"}">Web Development</option></select>

		<button data-sveltekit-preload-data="${"hover"}" type="${"submit"}" class="${"text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"}">Ask ama</button></form></div>`;
});
export {
  Page as default
};
