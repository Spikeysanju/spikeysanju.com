import type { RequestHandler } from './$types';
import { PUBLIC_WEBSITE_URL } from '$env/static/public';

const pages: string[] = ['blog', 'books', 'photos', 'irl', 'projects', 'tools', 'about', 'ama'];

export const GET = (async () => {
	return new Response(sitemap(pages), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		},
		status: 200,
		statusText: 'OK'
	});
}) satisfies RequestHandler;

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${PUBLIC_WEBSITE_URL}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page: string) => `
  <url>
    <loc>${PUBLIC_WEBSITE_URL}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
 
</urlset>`;
