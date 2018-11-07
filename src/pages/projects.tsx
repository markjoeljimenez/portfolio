import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/default'
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
	default: 2,
	500: 1
};

const Projects = () => (
	<StaticQuery
		query={graphql`
		query MasonryQuery {
			allFile(
				filter: { sourceInstanceName: { eq: "projects" }, extension: { ne: "jpg"} }
			) {
				edges {
					node {
						sourceInstanceName
						childMarkdownRemark {
							frontmatter {
								title
								path
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
						extension
					}
				}
			}
		}`}
		render={data => (
			<>
				<Layout>
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="gallery"
						columnClassName="gallery__column">
						{data.allFile.edges.map(post => {
							if (post.node.childMarkdownRemark.frontmatter.image) {
								return (
									<div key={post.node.childMarkdownRemark.frontmatter.title} className="gallery__item">
										<a href={post.node.childMarkdownRemark.frontmatter.path} className="gallery__link">
											<figure className="gallery__figure">
												<Img fixed={post.node.childMarkdownRemark.frontmatter.image.childImageSharp.fixed} className="gallery__image" style={{'display': 'block'}}/>
												{/* <img src={post.node.childMarkdownRemark.frontmatter.image.publicURL} className="gallery__image"/> */}
												<figcaption className="gallery__figcaption">{post.node.childMarkdownRemark.frontmatter.title}</figcaption>
											</figure>
										</a>
									</div>
								)
							}
						})}
					</Masonry>
				</Layout>
			</>
		)}
	/>
)

export default Projects
