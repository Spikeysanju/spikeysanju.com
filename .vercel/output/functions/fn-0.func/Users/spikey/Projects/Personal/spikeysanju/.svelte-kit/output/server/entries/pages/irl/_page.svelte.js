import { c as create_ssr_component, d as add_attribute, b as escape, e as each, v as validate_component } from "../../../chunks/index3.js";
function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}
const PeopleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { url } = $$props;
  let { image } = $$props;
  let { met } = $$props;
  let { tags } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.met === void 0 && $$bindings.met && met !== void 0)
    $$bindings.met(met);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  return `<div class="${"mt-6 flex w-full flex-col items-center justify-between space-y-3"}"><div class="${"flex w-full items-center justify-center space-x-3"}"><img${add_attribute("src", image, 0)}${add_attribute("alt", name, 0)} class="${"aspect-square h-12 w-12"}">
		<div class="${"space-y flex w-full flex-col"}"><h1${add_attribute("class", clsx(met ? "text-gray-500 line-through" : "text-gray-900", "w-full text-lg tracking-tight"), 0)}>${escape(name)}</h1>

			<p class="${"text-sm text-gray-500"}">${escape(url)}</p></div></div>

	${tags ? `<div class="${"flex flex-row gap-x-2"}">${each(tags, (tag) => {
    return `<span class="${"py rounded-xl bg-gray-50 px-2 text-xs font-bold capitalize tracking-wider text-gray-900"}">${escape(tag)}</span>`;
  })}</div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"flex w-full flex-col items-center justify-center"}"><h1 class="${"flex w-full"}">People I want to Meet IRL.</h1>
	<p class="${"flex w-full text-gray-500"}">Check out my list of inspirations, people whose work &amp; character I admire.
	</p>

	<div class="${"flex-co mt-6 flex w-full"}">${each(data.peopleIWannaMeetIRL, (item) => {
    return `<a${add_attribute("href", item.link, 0)}>${validate_component(PeopleCard, "PeopleCard").$$render(
      $$result,
      {
        name: item.name,
        met: item.met,
        image: item.image,
        tags: item.tags,
        url: "https://www.twitter.com/spikeysanju"
      },
      {},
      {}
    )}
			</a>`;
  })}

		${data.peopleIWannaMeetIRL.length === 0 ? `<div class="${"flex h-full w-full flex-col items-center justify-center"}"><h2 class="${"text-2xl"}">No people found.</h2>
				<p class="${"text-gray-500"}">Be the first to ask a question.</p>

				<a href="${"/ama/new"}" class="${"mt-4"}"><button class="${"btn btn-primary"}">Ask a question</button></a></div>` : ``}</div></section>`;
});
export {
  Page as default
};
