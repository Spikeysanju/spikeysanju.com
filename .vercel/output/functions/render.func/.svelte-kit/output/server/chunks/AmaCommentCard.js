import { c as create_ssr_component, f as add_attribute, a as escape } from "./index3.js";
import { formatDistance } from "date-fns";
const AmaCommentCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAuthor = "" } = $$props;
  let { image = "" } = $$props;
  let { name = "" } = $$props;
  let { content = "" } = $$props;
  let { createdAt = "" } = $$props;
  if ($$props.isAuthor === void 0 && $$bindings.isAuthor && isAuthor !== void 0)
    $$bindings.isAuthor(isAuthor);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  return `<div class="${"py-3"}"><div class="${"flex flex-row items-center justify-between"}"><div class="${"flow-row item-center flex w-full justify-between"}"><div class="${"flex flex-row items-center justify-center space-x-3"}"><img${add_attribute("src", image, 0)}${add_attribute("alt", name, 0)} class="${"h-9 w-9 rounded-full"}">
				<span class="${"font-medium text-gray-900"}">${escape(name)}</span>
				${isAuthor === "Author" ? `<span class="${"inline-flex rounded-full bg-green-100 px-2 text-xs font-medium leading-5 text-green-800 hover:bg-gray-200"}">AUTHOR
					</span>` : `${isAuthor === "Creator" ? `<span class="${"inline-flex rounded-full bg-blue-100 px-2 text-xs font-medium leading-5 text-blue-800 hover:bg-blue-200"}">CREATOR
					</span>` : `<span class="${"inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200"}">GUEST
					</span>`}`}</div>

			<div class="${"text-right"}"><span class="${"text-gray-500"}">${escape(formatDistance(new Date(`${createdAt}`), new Date()))}</span></div></div></div>

	<p class="${"mt-3 whitespace-pre-line"}">${escape(content)}</p></div>`;
});
export {
  AmaCommentCard as A
};
