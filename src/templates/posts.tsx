import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/default';

const dateFns = require('date-fns');

export default function Template({ data }) {
	const post = data.markdownRemark;

	return (
		<Layout>
			{(data.allFile.edges.filter(project => project.node.childMarkdownRemark.frontmatter.tag === post.frontmatter.tag).map(project => (
				<div className="header-panel panel panel--has-background-image" key={project.node.id}>
					<div className="panel__container">
						<div className="row">
							<div className="column">
								<div className="header-panel__content">
									<h1 className="panel__heading"><strong>{post.frontmatter.title}</strong></h1>
									<p className="panel__subheading">{project.node.childMarkdownRemark.frontmatter.title}</p>
									<h2 className="panel__subheading icon-text icon-text--left">
									{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="calendar"><rect width="24" height="24" opacity="0"/><path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z"/><circle cx="8" cy="16" r="1"/><path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/></g></g></svg> */}
									{dateFns.format(new Date(post.frontmatter.date), 'MMM D, YYYY')} &middot; {post.timeToRead}</h2>
								</div>
							</div>
						</div>
					</div>
					<picture className="panel__background-picture">
							<img className="panel__background-image" src={project.node.childMarkdownRemark.frontmatter.image.publicURL} />
					</picture>
				</div>
			)))}
			<article className="blog">
				<div className="blog__container">
					<div className="row">
						<div className="column column--md-8">
							<div className="blog__rte" dangerouslySetInnerHTML={{__html: post.html}} />
						</div>
					</div>
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