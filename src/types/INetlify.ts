export type Theme = 'Default' | 'Light' | 'Dark';

export interface INetlifyProjectFrontmatter {
	client?: string | null;
	date: Date;
	featured: boolean;
	image?: INetlifyImage  | null;
	path: string;
	reverse: boolean;
	tag?: string  | null;
	theme: Theme;
	title: string;
	tools?: string  | null;
	website?: INetlifyProjectWebsite  | null;
	workInProgress: boolean;
}

interface INetlifyProjectWebsite {
	githubLink?: string | null;
	githubTitle?: string | null;
	websiteLink?: string | null;
	websiteTitle?: string | null;
}

interface INetlifyImage {
	publicURL: string;
}