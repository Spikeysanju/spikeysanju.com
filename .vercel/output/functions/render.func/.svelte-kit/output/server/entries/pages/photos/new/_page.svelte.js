import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index3.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "";
  let description = "";
  let image = "";
  let fileType = "";
  const snapshot = {
    capture: () => ({ title, description, image, fileType }),
    restore: (value) => {
      title = value.title;
      description = value.description;
      image = value.image;
      fileType = value.fileType;
    }
  };
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  return `${$$result.head += `<!-- HEAD_svelte-1bc9716_START -->${$$result.title = `<title>Add Photo | Spikey Sanju</title>`, ""}<meta name="${"description"}" content="${"Add a new photo to the gallery"}"><!-- HEAD_svelte-1bc9716_END -->`, ""}

<section class="${"flex min-h-screen w-full flex-col items-center justify-start"}"><form action="${"?/create"}" method="${"post"}" class="${"flex w-full flex-col space-y-3"}"><label for="${"name"}" class="${"block text-sm font-medium text-gray-700 dark:text-gray-200"}">Name</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"title"}" id="${"title"}" autocomplete="${"title"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"}"${add_attribute("value", title, 0)}></div>

		<label for="${"description"}" class="${"block text-sm font-medium text-gray-700 dark:text-gray-200"}">Description</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"description"}" id="${"description"}" autocomplete="${"name"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"}"${add_attribute("value", description, 0)}></div>

		<label for="${"image"}" class="${"block text-sm font-medium text-gray-700 dark:text-gray-200"}">Image</label>
		<div class="${"mt-1"}"><input id="${"image-to-upload"}" type="${"file"}" accept="${".png,.jpg, .jpeg"}"></div>

		<input id="${"image"}" name="${"image"}" type="${"url"}" class="${"hidden"}"${add_attribute("value", image, 0)}>
		<input id="${"type"}" name="${"type"}" type="${"text"}" class="${"hidden"}"${add_attribute("value", fileType, 0)}>

		<button type="${"submit"}" class="${"text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black"}">Add photo</button></form></section>`;
});
export {
  Page as default
};
