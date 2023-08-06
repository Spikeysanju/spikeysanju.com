import { c as create_ssr_component, b as subscribe, a as escape, d as add_attribute, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AmaCommentCard } from "../../../../chunks/AmaCommentCard.js";
import { s as showLoginModal } from "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_showLoginModal;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => value);
  let { data } = $$props;
  function isAuthor(userId) {
    if (data.tools?.userId === userId) {
      return "Author";
    } else {
      return "Guest";
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_showLoginModal();
  return `${$$result.head += `<!-- HEAD_svelte-1w0mggm_START -->${$$result.title = `<title>${escape(data.tools?.name)} | Spikey Sanju</title>`, ""}<meta name="description"${add_attribute("content", data.tools?.description, 0)}><!-- HEAD_svelte-1w0mggm_END -->`, ""} <section class="mb-3 flex min-h-screen w-full flex-col items-center justify-start"><div class="mt-3 flex w-full flex-col space-y-3"><img${add_attribute("src", data.tools?.image, 0)}${add_attribute("alt", data.tools?.name, 0)} class="aspect-square w-24 object-cover"> <h1>${escape(data.tools?.name)}</h1> <p class="whitespace-pre-line">${escape(data.tools?.description)}</p></div> <div class="mt-6 flex w-full flex-col space-y-3"><h3 data-svelte-h="svelte-kc6sae">Comments</h3> ${data.tools.comment.length > 0 ? `${each(data.tools.comment, (item) => {
    return `${validate_component(AmaCommentCard, "AmaCommentCard").$$render(
      $$result,
      {
        name: data.tools.user?.name ?? "Anonymous",
        image: data.tools.user?.image ?? "/images/anonymous.png",
        content: item.content ?? "",
        isAuthor: isAuthor(data.tools.user?.id ?? "Guest"),
        createdAt: item.createdAt ?? ""
      },
      {},
      {}
    )}`;
  })}` : `<p data-svelte-h="svelte-dwwc05">No comments yet</p>`} ${$page.data.session && $page.data.session.user ? `<form method="post" action="?/create"><input type="hidden" name="toolId" id="toolId"${add_attribute("value", data.tools?.id, 0)}> <div class="flex flex-col items-end justify-center space-x-0 space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0"><textarea name="comment" id="comment" placeholder="Share your thoughts..." rows="3" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white">${escape("")}</textarea> <button type="submit" class="w-full rounded bg-black px-4 py-3 font-bold text-white shadow-lg hover:bg-gray-900 sm:w-auto sm:flex-auto" data-svelte-h="svelte-j6chuw">Submit</button></div></form>` : `<button class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200" data-svelte-h="svelte-1eni2fw">Sign in to comment</button>`}</div></section>`;
});
export {
  Page as default
};
