import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import Layout from '../layouts/default'

const BlogPage = () => (
	<StaticQuery
		query={graphql`
		query BlogPageQuery {
			allFile(
				filter: { sourceInstanceName: { eq: "posts" }, extension: { ne: "jpg"} }
			) {
				edges {
					node {
						id
						sourceInstanceName
						childMarkdownRemark {
							frontmatter {
								date
								title
								path
								image {
									publicURL
								}
							}
							html
						}
						extension
					}
				}
			}
		}`}
		render={data => (
			<>
				<Layout>
					<div className="blog">
						<ul className="blog__list">
							{data.allFile.edges.map(post => (
								<li className="blog__item" key={post.node.id}>
									<div className="blog__header">
										<h1 className="blog__heading">
											<a href={post.node.childMarkdownRemark.frontmatter.path} className="blog__link">
												{post.node.childMarkdownRemark.frontmatter.title}
											</a>
										</h1>
										<p className="blog__date">{post.node.childMarkdownRemark.frontmatter.date}</p>
									</div>
									<div className="blog__content" dangerouslySetInnerHTML={{__html: post.node.childMarkdownRemark.html}}/>
								</li>
							))}
						</ul>
					</div>
				</Layout>
			</>
		)}
	/>
)

export default BlogPage
