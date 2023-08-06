import { c as create_ssr_component, b as subscribe, a as escape, d as add_attribute, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import { formatDistance } from "date-fns";
import { A as AmaCommentCard } from "../../../../chunks/AmaCommentCard.js";
import "devalue";
import { s as showLoginModal } from "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_showLoginModal;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => value);
  let { data } = $$props;
  function isAuthor(userId) {
    if (data.ama?.userId === userId) {
      return "Author";
    } else {
      return "Guest";
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_showLoginModal();
  return `${$$result.head += `<!-- HEAD_svelte-8blg73_START -->${$$result.title = `<title>${escape(data.ama?.question)} | Spikey Sanju</title>`, ""}<meta name="description"${add_attribute("content", data.ama?.description, 0)}><!-- HEAD_svelte-8blg73_END -->`, ""} <section class="flex min-h-screen w-full flex-col"><div class="flex w-full flex-col space-y-3"><h1>${escape(data.ama?.question)}</h1> <p>${escape(data.ama?.description)}</p> <div class="flex flex-row items-center justify-between"><div class="flow-row flex w-full items-center justify-between space-x-3"><div class="flex flex-row items-center gap-3"><img${add_attribute("src", data.ama?.user?.image, 0)}${add_attribute("alt", data.ama?.user?.name, 0)} class="h-12 w-12 rounded-full"> <span class="font-medium text-black dark:text-white">${escape(data.ama?.user?.name)}</span></div> <div class="text-right"><span class="text-gray-500">${escape(formatDistance(/* @__PURE__ */ new Date(`${data.ama?.createdAt}`), /* @__PURE__ */ new Date()))}</span></div></div></div> <div class="flex w-full flex-col"><h3 data-svelte-h="svelte-kc6sae">Comments</h3> ${$page.data.session && $page.data.session.user ? `<form method="post" action="?/create"><input type="hidden" name="amaId" id="amaId"${add_attribute("value", data.ama?.id, 0)}> <input type="hidden" name="amaTitle" id="amaTitle"${add_attribute("value", data.ama?.question, 0)}> <div class="flex flex-col items-end justify-center space-x-0 space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0"><textarea name="comment" id="comment" placeholder="Share your thoughts..." rows="3" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white">${escape("")}</textarea> <button type="submit" class="w-full rounded bg-black px-4 py-3 font-bold text-white shadow-lg hover:bg-gray-900 sm:w-auto sm:flex-auto" data-svelte-h="svelte-vssywp">Submit</button></div></form>` : `<button class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200" data-svelte-h="svelte-6ca30w">Sign in to comment</button>`} <h6 class="py-3" data-svelte-h="svelte-ixrxyr">Recent comments</h6> ${data.ama.comment.length > 0 ? `${each(data.ama.comment, (item) => {
    return `${validate_component(AmaCommentCard, "AmaCommentCard").$$render(
      $$result,
      {
        name: data.ama.user?.name ?? "Anonymous",
        image: data.ama.user?.image ?? "/images/anonymous.png",
        content: item.content ?? "",
        isAuthor: isAuthor(data.ama.user?.id ?? "Guest"),
        createdAt: item.createdAt ?? ""
      },
      {},
      {}
    )}`;
  })}` : `<div class="flex h-full w-full flex-col items-center justify-center" data-svelte-h="svelte-7tb4py"><h5>No comments found.</h5> <p class="text-gray-500">Be the first to comment.</p></div>`}</div></div></section>`;
});
export {
  Page as default
};
