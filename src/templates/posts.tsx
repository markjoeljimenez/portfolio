import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/default';

const dateFns = require('date-fns');

export default function Template({ data }) {
	const post = data.markdownRemark;

	return (
		<Layout>
			<article className="blog">
				<div className="blog__header-container">
					<div className="blog__header">
						<h1 className="blog__heading">{post.frontmatter.title}</h1>
						<span className="blog__date">{dateFns.format(new Date(post.frontmatter.date), 'MM DD YY')}</span>
					</div>
				</div>
				<div className="blog__rte" dangerouslySetInnerHTML={{__html: post.html}} />
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
				title
			}
		}
	}
`