import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
const load = async ({ params }) => {
  const books = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/data/books/almanac-of-naval-ravikant.md": () => import("../../../../chunks/almanac-of-naval-ravikant.js"), "../../../lib/data/books/atomic-habits.md": () => import("../../../../chunks/atomic-habits.js"), "../../../lib/data/books/make-time.md": () => import("../../../../chunks/make-time.js"), "../../../lib/data/books/shape-up.md": () => import("../../../../chunks/shape-up.js") }), `../../../lib/data/books/${params.slug}.md`);
  const { title, date, author, image, categories, excerpt } = books.metadata;
  const content = books.default;
  return {
    title,
    content,
    date,
    author,
    slug: params.slug,
    image,
    categories,
    excerpt
  };
};
export {
  load
};