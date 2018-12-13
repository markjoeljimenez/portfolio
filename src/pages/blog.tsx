import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import Layout from '../layouts/default'

const create = require('../scripts/utilities/createFilePath.ts');

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
						<div className="blog__scroll">
							<ul className="blog__list">
								{data.allFile.edges.map(post => (
									<li className="blog__item" key={post.node.id}>
										<div className="blog__header">
											<h1 className="blog__heading">
												<Link to={post.node.childMarkdownRemark.frontmatter.path} className="blog__link">
													{post.node.childMarkdownRemark.frontmatter.title}
												</Link>
											</h1>
											<p className="blog__date">{post.node.childMarkdownRemark.frontmatter.date}</p>
										</div>
										<div className="blog__content" dangerouslySetInnerHTML={{__html: post.node.childMarkdownRemark.html}}/>
									</li>
								))}
							</ul>
						</div>
						<button className="blog__button"><span className="u-hidden">Scroll</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-downward"><rect width="24" height="24" opacity="0"/><path d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z"/></g></g></svg></button>
					</div>
				</Layout>
			</>
		)}
	/>
)

export default BlogPage
