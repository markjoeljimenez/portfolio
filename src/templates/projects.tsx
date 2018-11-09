import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../layouts/default';

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