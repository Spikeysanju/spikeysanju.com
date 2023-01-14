export interface Meta {
	title: string;
	date: string;
	categories: string[];
	author: string;
	image: string;
}

export interface Data {
	meta: Meta;
	path: string;
}
