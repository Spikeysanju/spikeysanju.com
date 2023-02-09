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
