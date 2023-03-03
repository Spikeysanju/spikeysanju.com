import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
const load = async ({ params }) => {
  const project = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/data/projects/coop-the-app.md": () => import("../../../../chunks/coop-the-app.js"), "../../../lib/data/projects/the-sample-project.md": () => import("../../../../chunks/the-sample-project.js") }), `../../../lib/data/projects/${params.slug}.md`);
  const { title, date, author, image, categories } = project.metadata;
  const content = project.default;
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
