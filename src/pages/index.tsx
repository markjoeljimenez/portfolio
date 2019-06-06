import React, { useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import Layout from '../site/layouts/default';
import ProjectPanel from '../site/components/panels/project-panel';
import ContactPanel from '../site/components/panels/contact-panel';


export default () => (
	<StaticQuery
		query={graphql`
		query IndexQuery {
			allContentfulProject {
				edges {
					node {
						blogPosts {
							heading
							id
							content {
								json
							}
							date
							path
						}
						client
						content {
							json
						}
						date
						display
						featured
						heading
						image {
							fluid {
								src
							}
						}
						links {
							githubLink
							githubTitle
							websiteLink
							websiteTitle
						}
						path
						technologies
						theme
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
						{data.allContentfulProject.edges.filter(project => project.node.featured)
						.sort((a, b) => {
							return new Date(b.node.date) - new Date(a.node.date);
						}).map((project, i) => {
							return (
								<ProjectPanel
									key={i}
									settings={project.node}
								/>
							)
						})}
					</section>

					<ContactPanel />

					<section id="projects">
						{data.allContentfulProject.edges.filter(project => !project.node.featured)
						.sort((a, b) => {
							return new Date(b.node.date) - new Date(a.node.date);
						}).map((project, i) => {
							return (
								<ProjectPanel
									key={i}
									settings={project.node}
								/>
							)
						})}
					</section>
				</Layout>
			</>
		)}
	/>
)
