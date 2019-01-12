import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import Layout from '../layouts/default'

const dateFns = require('date-fns');

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
								tag
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
				<Layout alignment="middle">
					<div className="blog">
						<div className="blog__scroll">
							<div className="blog__list">
								{data.allFile.edges.map(post => (
									<div className="blog__item" key={post.node.id}>
										{/* <div className="blog__header-container"> */}
											<div className="blog__header">
												<h1 className="blog__heading">
													<Link to={post.node.childMarkdownRemark.frontmatter.path} className="blog__link">
														{post.node.childMarkdownRemark.frontmatter.title}
													</Link>
												</h1>
												<p className="blog__date">{dateFns.format(new Date(post.node.childMarkdownRemark.frontmatter.date), 'MM DD YY')}</p>
											</div>
											<p className="blog__tag">{post.node.childMarkdownRemark.frontmatter.tag}</p>
										{/* </div> */}
										{/* <div className="blog__rte" dangerouslySetInnerHTML={{__html: post.node.childMarkdownRemark.html}}/> */}
									</div>
								))}
							</div>
						</div>
					</div>
				</Layout>
			</>
		)}
	/>
)

export default BlogPage
