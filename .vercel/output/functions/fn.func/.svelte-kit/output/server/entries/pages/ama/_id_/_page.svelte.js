import { c as create_ssr_component, b as escape, d as add_attribute, e as each, v as validate_component } from "../../../../chunks/index3.js";
import { formatDistance } from "date-fns";
import { A as AmaCommentCard } from "../../../../chunks/AmaCommentCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  function isAuthor(userId) {
    if (data.ama?.userId === userId && data.user?.role === "USER") {
      return "Author";
    } else if (data.ama?.userId === userId && data.user?.role === "ADMIN") {
      return "Creator";
    } else {
      return "Guest";
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-gj289e_START -->${$$result.title = `<title>${escape(data.ama?.question)} – Spikey Sanju</title>`, ""}<meta name="${"description"}"${add_attribute("content", data.ama?.description, 0)}><!-- HEAD_svelte-gj289e_END -->`, ""}

<section class="${"flex w-full flex-col"}"><div class="${"flex w-full flex-col space-y-3"}"><h1>${escape(data.ama?.question)}</h1>
		<p>${escape(data.ama?.description)}</p>

		<div class="${"flex flex-row items-center justify-between"}"><div class="${"flow-row flex items-center justify-center space-x-3"}"><img${add_attribute("src", data.ama?.user?.image, 0)}${add_attribute("alt", data.ama?.user?.name, 0)} class="${"h-12 w-12 rounded-full"}">
				<span class="${"font-medium text-gray-900"}">${escape(data.ama?.user?.name)}</span>

				<div class="${"text-right"}"><span class="${"text-gray-500"}">${escape(formatDistance(new Date(`${data.ama?.createdAt}`), new Date()))}</span></div></div></div>

		<div class="${"flex w-full flex-col"}"><h3>Comments</h3>

			<form method="${"post"}" action="${"?/create"}"><input type="${"hidden"}" name="${"amaId"}" id="${"amaId"}"${add_attribute("value", data.ama?.id, 0)}>

				<div class="${"flex flex-col items-end justify-center space-x-0 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"}"><textarea name="${"comment"}" id="${"comment"}" placeholder="${"Share your thoughts..."}" rows="${"3"}" class="${"w-full whitespace-pre-line rounded-md border border-gray-300 p-3"}">${""}</textarea>

					<button type="${"submit"}" class="${"w-full rounded bg-black py-3 px-4 font-bold text-white shadow-lg hover:bg-gray-900 sm:w-auto sm:flex-auto"}">Submit
					</button></div></form>

			<h6 class="${"py-3"}">Recent comments</h6>

			${data.comments.length > 0 ? `${each(data.comments, (item) => {
    return `${validate_component(AmaCommentCard, "AmaCommentCard").$$render(
      $$result,
      {
        name: item.user?.name ?? "Anonymous",
        image: item.user?.image ?? "/images/anonymous.png",
        content: item.content ?? "",
        isAuthor: isAuthor(item.user?.id ?? "Anonymous"),
        createdAt: item.createdAt ?? ""
      },
      {},
      {}
    )}`;
  })}` : `<div class="${"flex h-full w-full flex-col items-center justify-center"}"><h5>No comments found.</h5>
					<p class="${"text-gray-500"}">Be the first to comment.</p></div>`}</div></div></section>`;
});
export {
  Page as default
};
