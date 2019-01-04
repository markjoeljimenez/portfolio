import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../layouts/default';

/**
 * Each project will need several frontmatter:
 * - Title
 * - Path
 * - Date
 * - Tag
 * - Tools
 */
export const postQuery = graphql`
	query ProjectPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path} }) {
			html
			frontmatter {
				date
				path
				title
				tag
				tools
				website {
					githubLink
					githubTitle
					websiteLink
					websiteTitle
			}
			}
		}
		allFile(filter: {sourceInstanceName: {eq: "posts"}, extension: {eq: "md"}}) {
			edges {
				node {
					id
					sourceInstanceName
					childMarkdownRemark {
						frontmatter {
							title
							date
							path
							image {
								publicURL
							}
							tag
						}
					}
					extension
				}
			}
		}
	}`

export default function Template({ data }) {
	const post = data.markdownRemark;
	const blogPosts = data.allFile.edges;

	return (
		<Layout>
			<div className="project-details">
				<div className="project-details__header">
					<h1 className="project-details__title">{post.frontmatter.title}</h1>
					{post.frontmatter.tools !== null ? (
						<ul className="project-details__list">
							{
								splitToolsString(post.frontmatter.tools).map(tool => (
									<li className="project-details__item project-details__item--inline" key={tool}>
										<p className="pill">{tool}</p>
									</li>
								))
							}
						</ul>
					) : ''}
				</div>

				{post.frontmatter.website ? (
					<section className="project-details__section">
						<ul className="project-details__list project-details__list--links">
							<li className="project-details__item">
								<p>
									<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g></svg>
									<a href={post.frontmatter.website.githubLink} target="_blank" rel="noopener noreferrer">
										{post.frontmatter.website.githubTitle}
									</a>
								</p>
							</li>
							<li className="project-details__item">
								<p>
									<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g></svg>
									<a href={post.frontmatter.website.websiteLink} target="_blank" rel="noopener noreferrer">
										{post.frontmatter.website.websiteTitle}
									</a>
								</p>
							</li>
						</ul>
					</section>
				): ''}

				<section className="project-details__section">
					<article className="project-details__rte" dangerouslySetInnerHTML={{__html: post.html}}/>
				</section>

				{checkPosts(blogPosts, post.frontmatter.tag) ? (
					<section className="project-details__section">
						<article className="project-details__rte">
							<h2>Blog posts</h2>
							{blogPosts.filter(blogPost => blogPost.node.childMarkdownRemark.frontmatter.tag === post.frontmatter.tag).map(blogPost => (
								<p key={blogPost.node.id}>
									<Link to={blogPost.node.childMarkdownRemark.frontmatter.path}>{blogPost.node.childMarkdownRemark.frontmatter.title}</Link>
								</p>
							))}
						</article>
					</section>
				) : ''}
			</div>
		</Layout>
	)
}

function splitToolsString(str: string) {
	return str.split(' | ');
}

function checkPosts(arr, val) {
	return arr.some(function(arrVal) {
		return arrVal.node.childMarkdownRemark.frontmatter.tag === val;
	});
}