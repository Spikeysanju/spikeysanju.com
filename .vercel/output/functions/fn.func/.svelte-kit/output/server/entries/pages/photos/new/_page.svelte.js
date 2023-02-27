import { c as create_ssr_component, f as add_attribute } from "../../../../chunks/index3.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-xtpvnh_START -->${$$result.title = `<title>Add Photo – Spikey Sanju</title>`, ""}<meta name="${"description"}" content="${"Add a new photo to the gallery"}"><!-- HEAD_svelte-xtpvnh_END -->`, ""}

<div class="${"flex w-full flex-col"}"><form action="${"?/create"}" method="${"post"}" class="${"flex w-full flex-col space-y-3"}"><label for="${"name"}" class="${"block text-sm font-medium text-gray-700"}">Name</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"title"}" id="${"title"}" autocomplete="${"title"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"}"${add_attribute("value", title, 0)}></div>

		<label for="${"description"}" class="${"block text-sm font-medium text-gray-700"}">Description</label>
		<div class="${"mt-1"}"><input type="${"text"}" name="${"description"}" id="${"description"}" autocomplete="${"name"}" class="${"block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"}"${add_attribute("value", description, 0)}></div>

		<label for="${"image"}" class="${"block text-sm font-medium text-gray-700"}">Image</label>
		<div class="${"mt-1"}"><input id="${"image-to-upload"}" type="${"file"}" accept="${".png,.jpg, .jpeg"}"></div>

		<input id="${"image"}" name="${"image"}" type="${"url"}" class="${"hidden"}"${add_attribute("value", image, 0)}>
		<input id="${"type"}" name="${"type"}" type="${"text"}" class="${"hidden"}"${add_attribute("value", fileType, 0)}>

		<button type="${"submit"}" class="${"text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"}">Add photo</button></form></div>`;
});
export {
  Page as default
};
