import type { Data } from '$lib/type/blog-metadata';
import { fetchBooksMarkdownPosts } from '$lib/utils';
import type { RequestHandler } from './$types';

const siteURL = 'https://www.spikeysanju.com';
const siteTitle = 'Spikey Sanju';
const siteDescription = 'A blog by Spikey Sanju';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const allBooks = await fetchBooksMarkdownPosts();

	const sortedBooks = allBooks.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	}) satisfies Data[];

	const body = render(sortedBooks);
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	};

	return new Response(body, options);
};

const render = (books: Data[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${books
	.map(
		(book) => `<item>
<guid isPermaLink="true">${siteURL}/blog/${book.path}</guid>
<title>${book.meta.title}</title>
<link>${siteURL}/${book.path}</link>
<description>${book.meta.title}</description>
<pubDate>${new Date(book.meta.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`;
