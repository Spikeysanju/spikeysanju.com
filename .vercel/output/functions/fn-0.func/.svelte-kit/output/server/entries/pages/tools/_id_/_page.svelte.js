import { c as create_ssr_component, b as escape, d as add_attribute, e as each, v as validate_component } from "../../../../chunks/index3.js";
import { A as AmaCommentCard } from "../../../../chunks/AmaCommentCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let comment = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ses4ln_START -->${$$result.title = `<title>${escape(data.tools?.name)} – Spikey Sanju</title>`, ""}<meta name="${"description"}"${add_attribute("content", data.tools?.description, 0)}><!-- HEAD_svelte-1ses4ln_END -->`, ""}

<section class="${"flex w-full flex-col"}"><div class="${"flex w-full flex-col space-y-3"}"><h1>${escape(data.tools?.name)}</h1>
		<p>${escape(data.tools?.description)}</p></div>

	<div class="${"mt-6 flex w-full flex-col space-y-3"}"><h3>Comments</h3>

		<form method="${"post"}" action="${"?/create"}"><input type="${"hidden"}" name="${"toolId"}" id="${"toolId"}"${add_attribute("value", data.tools?.id, 0)}>

			<input name="${"comment"}" id="${"comment"}" placeholder="${"Share your thoughts..."}" class="${"w-full rounded-md border border-gray-300 p-3"}"${add_attribute("value", comment, 0)}></form>

		${each(data.comments, (item) => {
    return `${validate_component(AmaCommentCard, "AmaCommentCard").$$render(
      $$result,
      {
        name: item.user?.name ?? "Anonymous",
        image: item.user?.image ?? "/images/anonymous.png",
        content: item.content ?? "",
        createdAt: item.createdAt ?? ""
      },
      {},
      {}
    )}`;
  })}</div></section>`;
});
export {
  Page as default
};
