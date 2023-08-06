import { c as create_ssr_component, d as add_attribute, a as escape, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const MenuCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { href = "" } = $$props;
  let { icon = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `<div class="flex w-full flex-row items-center justify-between transition-all delay-75 ease-in-out hover:-rotate-1"><a class="delay-50 flex w-full items-center justify-between text-start text-2xl font-medium tracking-tight text-gray-900 transition-all hover:underline dark:text-white"${add_attribute("href", href, 0)}>${escape(name)}</a> <div>${validate_component(Icon, "Icon").$$render($$result, { size: "medium", name: icon }, {}, {})}</div></div>`;
});
export {
  MenuCell as M
};
