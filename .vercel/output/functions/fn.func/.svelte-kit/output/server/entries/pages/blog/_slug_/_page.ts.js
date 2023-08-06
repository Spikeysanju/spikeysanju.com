import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
const load = async ({ params }) => {
  const blog = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/data/blogs/how-i-built-sticai-from-scratch-lessons-learned-on-the-road-to-success.md": () => import("../../../../chunks/how-i-built-sticai-from-scratch-lessons-learned-on-the-road-to-success.js") }), `../../../lib/data/blogs/${params.slug}.md`);
  const { title, date, author, image, categories, excerpt } = blog.metadata;
  const content = blog.default;
  return {
    title,
    content,
    excerpt,
    date,
    author,
    slug: params.slug,
    image,
    categories
  };
};
export {
  load
};
