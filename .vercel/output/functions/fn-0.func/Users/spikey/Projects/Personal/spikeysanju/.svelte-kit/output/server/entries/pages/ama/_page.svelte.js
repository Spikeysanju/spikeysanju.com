import { c as create_ssr_component, b as escape, d as add_attribute, e as each, v as validate_component } from "../../../chunks/index3.js";
const AmaQuestionCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question = "" } = $$props;
  let { author = "" } = $$props;
  let { timeago = "" } = $$props;
  let { authorImage = "" } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.timeago === void 0 && $$bindings.timeago && timeago !== void 0)
    $$bindings.timeago(timeago);
  if ($$props.authorImage === void 0 && $$bindings.authorImage && authorImage !== void 0)
    $$bindings.authorImage(authorImage);
  return `<div class="${"flex w-full flex-col items-center justify-center space-y-3"}"><h1 class="${"w-full text-lg font-bold tracking-tight"}">${escape(question)}</h1>

	<div class="${"flex w-full flex-row items-center justify-between"}"><div class="${"flex flex-row space-x-3"}"><img${add_attribute("src", authorImage, 0)}${add_attribute("alt", author, 0)} class="${"h-6 w-6 rounded-full"}">
			<span>${escape(author)}</span></div>
		<p class="${"text-sm text-stone-500"}">${escape(timeago)}</p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section><h1>Ask me anything</h1>
	<p class="${"w-full text-gray-500"}">I&#39;ll try to answer as many questions as possible.</p>

	<button class="${"mt-4 rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"}"><a href="${"/ama/new"}">Ask a question</a></button>

	<div class="${"mt-6 flex w-full flex-col gap-8"}">${each(data.ama, (item) => {
    return `<a${add_attribute("href", `/ama/${item.id}`, 0)}>${validate_component(AmaQuestionCard, "AmaCard").$$render(
      $$result,
      {
        question: item.question,
        author: "Sanju S",
        timeago: "5 min ago",
        authorImage: "https://github.com/spikeysanju.png?size=36"
      },
      {},
      {}
    )}
			</a>`;
  })}

		${data.ama.length === 0 ? `<div class="${"flex h-full w-full flex-col items-center justify-center"}"><h2 class="${"text-2xl"}">No posts found.</h2>
				<p class="${"text-gray-500"}">Be the first to ask a question.</p>

				<a href="${"/ama/new"}" class="${"mt-4"}"><button class="${"btn btn-primary"}">Ask a question</button></a></div>` : ``}</div></section>`;
});
export {
  Page as default
};
