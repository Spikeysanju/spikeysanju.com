import { f as fetchBlogsMarkdownPosts } from "../../../../../chunks/utils.js";
const siteURL = "https://www.spikeysanju.com";
const siteTitle = "Spikey Sanju";
const siteDescription = "A blog by Spikey Sanju";
const prerender = true;
const GET = async () => {
  const allBlogs = await fetchBlogsMarkdownPosts();
  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
  const body = render(sortedBlogs);
  const options = {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml"
    }
  };
  return new Response(body, options);
};
const render = (blogs) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${blogs.map(
  (blog) => `<item>
<guid isPermaLink="true">${siteURL}/blogs/${blog.path}</guid>
<title>${blog.meta.title}</title>
<link>${siteURL}/blogs/${blog.path}</link>
<description>${blog.meta.title}</description>
<pubDate>${new Date(blog.meta.date).toUTCString()}</pubDate>
<dc:creator>${blog.meta.author}</dc:creator>
</item>`
).join("")}
</channel>
</rss>
`;
export {
  GET,
  prerender
};
