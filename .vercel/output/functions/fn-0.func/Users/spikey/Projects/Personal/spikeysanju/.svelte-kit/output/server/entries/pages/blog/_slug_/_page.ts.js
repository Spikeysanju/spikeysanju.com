import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
const load = async ({ params }) => {
  const blog = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/data/blogs/impact-of-user-flow-in-startup.md": () => import("../../../../chunks/impact-of-user-flow-in-startup.js"), "../../../lib/data/blogs/tips-for-accessibility.md": () => import("../../../../chunks/tips-for-accessibility.js"), "../../../lib/data/blogs/use-data-to-improve-ui-ux-in-startups.md": () => import("../../../../chunks/use-data-to-improve-ui-ux-in-startups.js") }), `../../../lib/data/blogs/${params.slug}.md`);
  const { title, date, author, image, categories } = blog.metadata;
  const content = blog.default;
  return {
    title,
    content,
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
