import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../layouts/default';
import { checkPosts } from './projects';

const dateFns = require('date-fns');

export default function Template({ data }) {
	const post = data.markdownRemark;

	return (
		<Layout>
			{(data.allFile.edges.filter(project => project.node.sourceInstanceName === 'projects')
			.filter(project => project.node.childMarkdownRemark.frontmatter.tag === post.frontmatter.tag)
			.map(project => (
				<div className={`header-panel panel panel--has-background-image ${!post.frontmatter.image ? 'panel--dark' : ''}`} key={project.node.id}>
					<div className="panel__container">
						<div className="row">
							<div className="column">
								<div className="header-panel__content">
									<h1 className="panel__heading"><strong>{post.frontmatter.title}</strong></h1>
									<h2 className="panel__subheading"><Link to={project.node.childMarkdownRemark.frontmatter.path}>{project.node.childMarkdownRemark.frontmatter.title}</Link></h2>
									<h2 className="panel__subheading icon-text icon-text--left">
									{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="calendar"><rect width="24" height="24" opacity="0"/><path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z"/><circle cx="8" cy="16" r="1"/><path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/></g></g></svg> */}
									{dateFns.format(new Date(post.frontmatter.date), 'MMM D, YYYY')} {post.timeToRead ? <>&middot; {post.timeToRead}</> : ''}</h2>
								</div>
							</div>
						</div>
					</div>
					
					{project.node.childMarkdownRemark.frontmatter.image ? (
						<picture className="panel__background-picture">
								<img className="panel__background-image" src={project.node.childMarkdownRemark.frontmatter.image.publicURL} />
						</picture>
					) : ''}
				</div>
			)))}
			<article className="blog">
				<div className="blog__container">
					<div className="row">
						<div className="column column--md-8">
							<div className="blog__rte" dangerouslySetInnerHTML={{__html: post.html}} />
						</div>
						{checkPosts(data.allFile.edges.filter(post => post.node.sourceInstanceName === 'posts'), post.frontmatter.tag) ? (
							<aside className="column column--md-4">
								<nav className="side-navigation">
									<ul className="side-navigation__list">
										<li className="side-navigation__item side-navigation__item--heading">
											<h2 className="side-navigation__heading">Blog posts</h2>
										</li>
										{data.allFile.edges
										.filter(project => project.node.sourceInstanceName === 'posts' && project.node.childMarkdownRemark.frontmatter.tag === post.frontmatter.tag)
										.sort((a, b) => {
											return new Date(b.node.childMarkdownRemark.frontmatter.date) - new Date(a.node.childMarkdownRemark.frontmatter.date);
										})
										.map(blogPost => (
											<li className="side-navigation__item" key={blogPost.node.id}>
												<Link className="side-navigation__link" activeClassName="side-navigation__link--current" to={blogPost.node.childMarkdownRemark.frontmatter.path}>{blogPost.node.childMarkdownRemark.frontmatter.title}</Link>
											</li>
										))}
									</ul>
								</nav>
							</aside>
						) : ''}
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
		allFile {
			edges {
				node {
					id
					sourceInstanceName
					childMarkdownRemark {
						frontmatter {
							date
							title
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