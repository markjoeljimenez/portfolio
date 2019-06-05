import * as React from 'react';
import { graphql, Link } from 'gatsby';
import dateFns from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import IContentfulProject from '../types/IContentfulProject';

import Layout from '../layouts/default';

export const postQuery = graphql`
	query ProjectPostByPath($path: String!) {
		contentfulProject(path: {eq: $path}) {
			blogPosts {
				heading
				id
				path
			}
			content {
				json
			}
			date
			heading
		}
	}`

export default function Template({ data }) {
	const project = data.contentfulProject as IContentfulProject;

	console.log(project);

	return (
		<Layout>
			{/* <div className={`header-panel panel panel--has-background-image ${!post.frontmatter.image ? 'panel--dark' : ''}`}> */}
			<div className={`header-panel panel panel--has-background-image panel--dark`}>
				<div className="panel__container">
					<div className="row">
						<div className="column">
							<div className="header-panel__content">
								<h1 className="panel__heading"><strong>{project.heading}</strong></h1>
								<h2 className="panel__subheading icon-text icon-text--left">
								{dateFns.format(new Date(project.date), 'MMM D, YYYY')}</h2>
							</div>
						</div>
					</div>
				</div>
				{/* {post.frontmatter.image ? (
					<picture className="panel__background-picture">
						<img className="panel__background-image" src={post.frontmatter.image.publicURL} />
					</picture>
				) : ''} */}
			</div>
			<article className="blog">
				<div className="blog__container">
					<div className="row">
						<div className="column column--md-8">
							<section className="blog__section">
								<article className="blog__rte">
									{documentToReactComponents(project.content.json)}
								</article>
							</section>
						</div>

						{project.blogPosts ? (
							<aside className="column column--md-4">
								<nav className="side-navigation">
									<ul className="side-navigation__list">
										<li className="side-navigation__item side-navigation__item--heading">
											<h2 className="side-navigation__heading">Blog posts</h2>
										</li>
										{project.blogPosts
										.sort((a, b) => {
											return new Date(b.date) - new Date(a.date);
										})
										.map(blogPost => (
											<li className="side-navigation__item" key={blogPost.id}>
												<Link className="side-navigation__link" to={blogPost.path}>{blogPost.heading}</Link>
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

function splitToolsString(str: string) {
	return str.split(' | ');
}
