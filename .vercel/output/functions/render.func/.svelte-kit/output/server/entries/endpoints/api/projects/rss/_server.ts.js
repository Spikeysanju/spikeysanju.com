import { b as fetchProjectsMarkdownPosts } from "../../../../../chunks/utils.js";
const siteURL = "https://www.spikeysanju.com";
const siteTitle = "Spikey Sanju";
const siteDescription = "A blog by Spikey Sanju";
const prerender = true;
const GET = async () => {
  const allProjects = await fetchProjectsMarkdownPosts();
  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
  const body = render(sortedProjects);
  const options = {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml"
    }
  };
  return new Response(body, options);
};
const render = (projects) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${projects.map(
  (project) => `<item>
<guid isPermaLink="true">${siteURL}/projects/${project.path}</guid>
<title>${project.meta.title}</title>
<link>${siteURL}/projects/${project.path}</link>
<description>${project.meta.title}</description>
<dc:creator>${project.meta.author}</dc:creator>
<pubDate>${new Date(project.meta.date).toUTCString()}</pubDate>
</item>`
).join("")}
</channel>
</rss>
`;
export {
  GET,
  prerender
};
