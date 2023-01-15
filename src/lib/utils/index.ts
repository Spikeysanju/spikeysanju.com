export const fetchBlogsMarkdownPosts = async () => {
	const allFiles = import.meta.glob(`/src/lib/data/blogs/*.md`);
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
	const allFiles = import.meta.glob(`/src/lib/data/books/*.md`);
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

export const fetchToolsMarkdownPosts = async () => {
	const allFiles = import.meta.glob(`/src/lib/data/tools/*.md`);
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
