import { format } from "date-fns";
const fetchBlogsMarkdownPosts = async () => {
  const allFiles = /* @__PURE__ */ Object.assign({ "/src/lib/data/blogs/how-i-built-sticai-from-scratch-lessons-learned-on-the-road-to-success.md": () => import("./how-i-built-sticai-from-scratch-lessons-learned-on-the-road-to-success.js") });
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
  const allFiles = /* @__PURE__ */ Object.assign({ "/src/lib/data/books/almanac-of-naval-ravikant.md": () => import("./almanac-of-naval-ravikant.js"), "/src/lib/data/books/show-your-work.md": () => import("./show-your-work.js") });
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
  const allFiles = /* @__PURE__ */ Object.assign({ "/src/lib/data/projects/abogrow.md": () => import("./abogrow.js"), "/src/lib/data/projects/sticai.md": () => import("./sticai.js") });
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
  const allFiles = /* @__PURE__ */ Object.assign({ "/src/lib/data/blogs/how-i-built-sticai-from-scratch-lessons-learned-on-the-road-to-success.md": () => import("./how-i-built-sticai-from-scratch-lessons-learned-on-the-road-to-success.js") });
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
        <lastmod>${convertDateFormat(post.createdAt)}</lastmod>
        <priority>0.7</priority>
      </url>
      `
  ).join("")}
  </urlset>`;
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function convertDateFormat(dateString) {
  if (dateString === null) {
    return "";
  }
  const date = new Date(dateString);
  const formattedDate = format(date, "yyyy-MM-dd");
  return formattedDate;
}
export {
  fetchBooksMarkdownPosts as a,
  fetchProjectsMarkdownPosts as b,
  fetchBlogPostBySlug as c,
  generateSitemapForAma as d,
  generateSitemap as e,
  fetchBlogsMarkdownPosts as f,
  generateRandomId as g,
  capitalizeFirstLetter as h
};
