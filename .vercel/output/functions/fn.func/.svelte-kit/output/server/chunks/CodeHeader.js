import { c as create_ssr_component, b as escape } from "./index3.js";
const CodeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Terminal" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<span class="${"mt-3 -mb-3 flex w-full bg-deeppurple px-2 py-2 text-base text-white"}">${escape(title)}</span>`;
});
export {
  CodeHeader as C
};
