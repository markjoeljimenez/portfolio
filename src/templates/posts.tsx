import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/default';

const dateFns = require('date-fns');

export default function Template({ data }) {
	const post = data.markdownRemark;

	return (
		<Layout>
			<div className="header-panel panel panel--has-background-image">
				{(data.allFile.edges.filter(project => project.node.childMarkdownRemark.frontmatter.tag === post.frontmatter.tag).map(project => (
					<>
						<div className="panel__container">
							<div className="header-panel__content">
								<h1 className="panel__heading"><strong>{project.node.childMarkdownRemark.frontmatter.title}</strong></h1>
								<p className="panel__subheading">{post.frontmatter.title}</p>
							</div>
						</div>
						<picture className="panel__background-picture">
								<img className="panel__background-image" src={project.node.childMarkdownRemark.frontmatter.image.publicURL} />
						</picture>
					</>
				)))}
			</div>
			<article className="blog">
				<div className="blog__container">
					<h2 className="blog__date">{dateFns.format(new Date(post.frontmatter.date), 'dddd, MMMM D, YYYY')}</h2>
					<div className="blog__rte" dangerouslySetInnerHTML={{__html: post.html}} />
				</div>
			</article>
		</Layout>
	)
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path} }) {
			html
			frontmatter {
				tag
				date
				title
				image {
					publicURL
					childImageSharp {
						fixed {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
		allFile(
			filter: { sourceInstanceName: { eq: "projects"}}
		) {
			edges {
				node {
					id
					sourceInstanceName
					childMarkdownRemark {
						frontmatter {
							date
							title
							shortDescription
							client
							workInProgress
							path
							image {
								publicURL
								childImageSharp {
									fixed {
										...GatsbyImageSharpFixed
									}
								}
							}
							website {
								websiteLink
								websiteTitle
							}
							featured
							theme
							reverse
							tag
						}
						html
					}
					extension
				}
			}
		}
	}
`