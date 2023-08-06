import { c as create_ssr_component, d as add_attribute, a as escape } from "./ssr.js";
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote = "Quote" } = $$props;
  let { author = "Author" } = $$props;
  let { borderColor = "border-yellow-300" } = $$props;
  let { textColor = "text-gray-900" } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  return `<br> <div${add_attribute("class", `relative flex w-full flex-col space-y-3 border-l-4 ${borderColor} p-6  ${textColor} dark:text-white`, 0)}><h1 class="absolute left-6 top-3 text-3xl font-bold" data-svelte-h="svelte-dlmgkf">&quot;</h1> <div class="text-2xl leading-relaxed tracking-tight sm:text-3xl">${escape(quote)}</div> <p>– ${escape(author)}</p></div> <br>`;
});
export {
  Quote as Q
};
