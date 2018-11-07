import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/default';

export default function Template({ data }) {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<article className="article">
				<div className="article__header">
					<h1 className="article__heading">{post.frontmatter.title}</h1>
					<span className="article__date">{post.frontmatter.date}</span>
				</div>
				<div className="article__rte" dangerouslySetInnerHTML={{__html: post.html}} />
			</article>
		</Layout>
	)
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path} }) {
			html
			frontmatter {
				date
				path
				title
			}
		}
	}
`