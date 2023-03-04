import type { Data } from '$lib/type/blog-metadata';
import type { Ama, Tools } from '@prisma/client';

export const fetchBlogsMarkdownPosts = async () => {
	const allFiles = import.meta.glob('/src/lib/data/blogs/*.md');
	const iterablePostFiles = Object.entries(allFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.slice(20, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchBooksMarkdownPosts = async () => {
	const allFiles = import.meta.glob('/src/lib/data/books/*.md');
	const iterablePostFiles = Object.entries(allFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.slice(20, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchProjectsMarkdownPosts = async () => {
	const allFiles = import.meta.glob('/src/lib/data/projects/*.md');
	const iterableProjectFiles = Object.entries(allFiles);

	const allProjects = await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.slice(23, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allProjects;
};

// fetch single blog post by slug using import.meta.glob
export const fetchBlogPostBySlug = async (slug: string) => {
	const allFiles = import.meta.glob('/src/lib/data/blogs/*.md');
	const iterablePostFiles = Object.entries(allFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.slice(20, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts.find((post) => post.path === slug);
};

export function selectImageAndUploadToServer(
	file: File,
	onSuccess: (data: string, fileType: string) => void,
	onError: (error: string) => void
) {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = (e) => {
		if (e.target != null) {
			const dataURL = e.target.result as string;
			if (file.type.startsWith('image/') && file.size < 5 * 1024 * 1024) {
				onSuccess(dataURL, file.type);
			} else if (file.type.startsWith('video/') && file.size < 100 * 1024 * 1024) {
				onSuccess(dataURL, file.type);
			} else {
				onError('Please select a file with a valid type and size');
			}
		}
	};
}

// generate a random string of length 21 and return a string
export function generateRandomId(): string {
	const randomString =
		Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	return randomString;
}

export function generateSitemap<T extends Data>(url: string, route: string, posts: T[]) {
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
    
    ${posts
			.map(
				(post) =>
					`
      <url>
        <loc>${url}/${route}/${post.path}</loc>
        <changefreq>daily</changefreq>
        <lastmod>${post.meta.date}</lastmod>
        <priority>0.7</priority>
      </url>
      `
			)
			.join('')}
  </urlset>`;
}

type SitemapData = Ama | Tools;

export function generateSitemapForAma(url: string, route: string, posts: SitemapData[]) {
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
    
    ${posts
			.map(
				(post) =>
					`
      <url>
        <loc>${url}/${route}/${post.id}</loc>
        <changefreq>daily</changefreq>
        <lastmod>${post.createdAt}</lastmod>
        <priority>0.7</priority>
      </url>
      `
			)
			.join('')}
  </urlset>`;
}

export function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
