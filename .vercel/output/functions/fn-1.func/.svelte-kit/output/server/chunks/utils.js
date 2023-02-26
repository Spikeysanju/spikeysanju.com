const fetchBlogsMarkdownPosts = async () => {
  const allFiles = /* @__PURE__ */ Object.assign({ "/src/lib/data/blogs/from-good-to-great-developer-experience.md": () => import("./from-good-to-great-developer-experience.js"), "/src/lib/data/blogs/impact-of-user-flow-in-startup.md": () => import("./impact-of-user-flow-in-startup.js"), "/src/lib/data/blogs/tips-for-accessibility.md": () => import("./tips-for-accessibility.js"), "/src/lib/data/blogs/use-data-to-improve-ui-ux-in-startups.md": () => import("./use-data-to-improve-ui-ux-in-startups.js") });
  const iterablePostFiles = Object.entries(allFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(20, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const fetchBooksMarkdownPosts = async () => {
  const allFiles = /* @__PURE__ */ Object.assign({ "/src/lib/data/books/almanac-of-naval-ravikant.md": () => import("./almanac-of-naval-ravikant.js"), "/src/lib/data/books/atomic-habits.md": () => import("./atomic-habits.js"), "/src/lib/data/books/make-time.md": () => import("./make-time.js"), "/src/lib/data/books/shape-up.md": () => import("./shape-up.js") });
  const iterablePostFiles = Object.entries(allFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(20, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const fetchProjectsMarkdownPosts = async () => {
  const allFiles = /* @__PURE__ */ Object.assign({ "/src/lib/data/projects/coop-the-app.md": () => import("./coop-the-app.js") });
  const iterableProjectFiles = Object.entries(allFiles);
  const allProjects = await Promise.all(
    iterableProjectFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(23, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allProjects;
};
const fetchBlogPostBySlug = async (slug) => {
  const allFiles = /* @__PURE__ */ Object.assign({ "/src/lib/data/blogs/from-good-to-great-developer-experience.md": () => import("./from-good-to-great-developer-experience.js"), "/src/lib/data/blogs/impact-of-user-flow-in-startup.md": () => import("./impact-of-user-flow-in-startup.js"), "/src/lib/data/blogs/tips-for-accessibility.md": () => import("./tips-for-accessibility.js"), "/src/lib/data/blogs/use-data-to-improve-ui-ux-in-startups.md": () => import("./use-data-to-improve-ui-ux-in-startups.js") });
  const iterablePostFiles = Object.entries(allFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(20, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts.find((post) => post.path === slug);
};
function generateRandomId() {
  const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return randomString;
}
function generateSitemap(url, route, posts) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
    <url>
      <loc>${url}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    
    ${posts.map(
    (post) => `
      <url>
        <loc>${url}/${route}/${post.path}</loc>
        <changefreq>daily</changefreq>
        <lastmod>${post.meta.date}</lastmod>
        <priority>0.7</priority>
      </url>
      `
  ).join("")}
  </urlset>`;
}
function generateSitemapForAma(url, route, posts) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
    <url>
      <loc>${url}/${route}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    
    ${posts.map(
    (post) => `
      <url>
        <loc>${url}/${route}/${post.id}</loc>
        <changefreq>daily</changefreq>
        <lastmod>${post.createdAt}</lastmod>
        <priority>0.7</priority>
      </url>
      `
  ).join("")}
  </urlset>`;
}
export {
  fetchBooksMarkdownPosts as a,
  fetchProjectsMarkdownPosts as b,
  fetchBlogPostBySlug as c,
  generateSitemapForAma as d,
  generateSitemap as e,
  fetchBlogsMarkdownPosts as f,
  generateRandomId as g
};
