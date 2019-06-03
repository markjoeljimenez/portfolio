import React, { useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import Layout from '../layouts/default';
import ProjectPanel from '../components/panels/project-panel';
import ContactPanel from '../components/panels/contact-panel';


export default () => (
	<StaticQuery
		query={graphql`
		query IndexQuery {
			allFile(
				filter: { internal: { mediaType: { eq: "text/markdown" } } }
			) {
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
									githubLink
									githubTitle
									websiteLink
									websiteTitle
								}
								featured
								theme
								reverse
								tag
							}
							excerpt(format: HTML)
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
					<div className="hero-panel panel">
						<div className="panel__container">
							<div className="row row--no-margin-top">
								<div className="column">
									<h1>Let's skip introductions
										<br/>and get to <Link to={'#work'}>work</Link>.
									</h1>
								</div>
							</div>
						</div>
					</div>

					<section id="work">
						{data.allFile.edges.filter(project => project.node.sourceInstanceName === 'projects' && project.node.childMarkdownRemark.frontmatter.featured)
						.sort((a, b) => {
							return new Date(b.node.childMarkdownRemark.frontmatter.date) - new Date(a.node.childMarkdownRemark.frontmatter.date);
						}).map((project, i) => {
							return (
								<ProjectPanel
									key={i}
									frontmatter={project.node.childMarkdownRemark.frontmatter}
									excerpt={project.node.childMarkdownRemark.excerpt}
								/>
							)
						})}
					</section>

					<ContactPanel />

					<section id="projects">
						{data.allFile.edges.filter(project => project.node.sourceInstanceName === 'projects' && !project.node.childMarkdownRemark.frontmatter.featured)
						.sort((a, b) => {
							return new Date(b.node.childMarkdownRemark.frontmatter.date) - new Date(a.node.childMarkdownRemark.frontmatter.date);
						}).map((project, i) => {
							return (
								<ProjectPanel
									key={i}
									frontmatter={project.node.childMarkdownRemark.frontmatter}
									excerpt={project.node.childMarkdownRemark.excerpt}
									blogPosts={
										data.allFile.edges.filter(post => post.node.sourceInstanceName === 'posts' && project.node.childMarkdownRemark.frontmatter.tag === post.node.childMarkdownRemark.frontmatter.tag)
									}
								/>
							)
						})}
					</section>
				</Layout>
			</>
		)}
	/>
)
