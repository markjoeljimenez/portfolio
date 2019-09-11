import IContentfulProject, { IContentfulRichTextNode } from './IContentfulProject';

export default interface IContentfulPost {
	content: IContentfulRichTextNode;
	date: Date;
	heading: string;
	id: string;
	path: string;
	project?: IContentfulProject[];
}