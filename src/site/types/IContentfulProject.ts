import IContentfulPost from './IContentfulPost';

export default interface IContentfulProject {
	blogPosts: IContentfulPost[];
	content: IContentfulRichTextNode;
	client?: string;
	date: Date;
	display: boolean;
	featured: boolean;
	heading: string;
	image: IContentfulImage;
	links: IContentfulLinks;
	path?: string;
	theme: string[];
	technologies: string[];
}

export interface IContentfulRichTextNode {
	json: any;
}

interface IContentfulLinks {
	githubLink?: string;
	githubTitle?: string;
	websiteLink?: string;
	websiteTitle?: string;
}

interface IContentfulImage {
	fluid: IContentfulFluid;
}

interface IContentfulFluid {
	src: string;
}
