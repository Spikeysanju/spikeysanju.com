import { c as create_ssr_component, d as add_attribute, a as escape } from "./ssr.js";
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { author } = $$props;
  let { image } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<article${add_attribute("id", title, 0)} class="flex w-full max-w-sm flex-col transition-all ease-linear hover:-rotate-3"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="aspect-video"> <div class="space-y mb-3 mt-3 flex w-full flex-col space-y-2"><h1${add_attribute("id", title, 0)} class="-mb-2 text-lg tracking-tight text-black dark:text-white">${escape(title)}</h1> <p class="text-base text-gray-500 dark:text-gray-400">${escape(author)}</p></div></article>`;
});
export {
  BlogCard as B
};
