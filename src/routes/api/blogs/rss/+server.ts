import type { Data } from '$lib/type/blog-metadata';
import { fetchBlogsMarkdownPosts } from '$lib/utils/utils';
import type { RequestHandler } from '../../$types';

const siteURL = 'https://www.spikeysanju.com';
const siteTitle = 'Spikey Sanju';
const siteDescription = 'A blog by Spikey Sanju';

export const prerender = true;

export const GET = (async () => {
	const allBlogs = await fetchBlogsMarkdownPosts();

	const sortedBlogs = allBlogs.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	}) satisfies Data[];

	const body = render(sortedBlogs);
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	};

	return new Response(body, options);
}) satisfies RequestHandler;

const render = (blogs: Data[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${blogs
	.map(
		(blog) => `<item>
<guid isPermaLink="true">${siteURL}/blogs/${blog.path}</guid>
<title>${blog.meta.title}</title>
<link>${siteURL}/blogs/${blog.path}</link>
<description>${blog.meta.title}</description>
<pubDate>${new Date(blog.meta.date).toUTCString()}</pubDate>
<dc:creator>${blog.meta.author}</dc:creator>
</item>`
	)
	.join('')}
</channel>
</rss>
`;
