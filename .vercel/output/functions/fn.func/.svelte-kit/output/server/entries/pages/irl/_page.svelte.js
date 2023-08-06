import { c as create_ssr_component, d as add_attribute, a as escape, e as each, b as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../chunks/public.js";
function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}
const PeopleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { url } = $$props;
  let { met } = $$props;
  let { tags } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.met === void 0 && $$bindings.met && met !== void 0)
    $$bindings.met(met);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  return `<div class="mt-6 flex w-full flex-row items-center justify-between space-y-3"><div class="flex w-full items-center justify-center space-x-3"><div class="space-y flex w-full flex-col"><h1${add_attribute("class", clsx(met ? "text-gray-500 line-through" : "text-gray-900", "w-full text-lg tracking-tight"), 0)}>${escape(name)}</h1> <p class="text-sm text-gray-500">${escape(url)}</p></div></div> ${tags ? `<div class="flex flex-row gap-x-2">${each(tags, (tag) => {
    return `<span class="py w-fit items-center rounded-xl bg-gray-50 px-2 text-center text-xs font-bold capitalize tracking-wider text-gray-900">${escape(tag)}</span>`;
  })}</div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-2rcki6_START -->${$$result.title = `<title>IRL | Spikey Sanju</title>`, ""}<meta name="description" content="People I want to meet IRL."><link rel="canonical" href="${escape(PUBLIC_WEBSITE_URL, true) + "/irl"}"><meta name="robots" content="index, follow"><!-- HEAD_svelte-2rcki6_END -->`, ""} <section class="flex min-h-screen w-full flex-col items-center justify-start"><h1 class="flex w-full" data-svelte-h="svelte-h451o0">People I want to Meet IRL.</h1> <p class="flex w-full text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1kjagdg">Check out my list of inspirations, people whose work I admire.</p> ${$page.data.session && data.currentUser?.role === "ADMIN" ? `<div class="mt-3 flex w-full" data-svelte-h="svelte-7ete9c"><a href="irl/new" class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200">Add person to list</a></div>` : ``} <div class="mt-6 flex w-full flex-col">${data.peopleIWannaMeetIRL ? `${each(data.peopleIWannaMeetIRL, (item) => {
    return `<a${add_attribute("href", item.link, 0)}>${validate_component(PeopleCard, "PeopleCard").$$render(
      $$result,
      {
        name: item.name,
        met: item.met,
        tags: item.tags,
        url: item.link
      },
      {},
      {}
    )} </a>`;
  })}` : `<p class="flex w-full text-gray-500 dark:text-gray-400" data-svelte-h="svelte-zuhxbv">No people to meet IRL yet.</p>`}</div></section>`;
});
export {
  Page as default
};
