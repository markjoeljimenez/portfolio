import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../layouts/default';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import IContentfulPost from '../types/IContentfulPost';

const dateFns = require('date-fns');

export const postQuery = graphql`
	query BlogPostByPath {
		contentfulPost {
			content {
				json
			}
			heading
			project {
				blogPosts {
					heading
					id
					path
				}
				date
				heading
				path
			}
		}
	}
`

export default function Template({ data }) {
	const post = data.contentfulPost as IContentfulPost;

	console.log(post);

	return (
		<Layout>
			{/* <div className={`header-panel panel panel--has-background-image ${!post.frontmatter.image ? 'panel--dark' : ''}`} key={project.node.id}> */}
			<div className={`header-panel panel panel--has-background-image panel--dark`}>
				<div className="panel__container">
					<div className="row">
						<div className="column">
							<div className="header-panel__content">
								<h1 className="panel__heading"><strong>{post.project[0].heading}</strong></h1>
								<h2 className="panel__subheading"><Link to={post.project[0].path}>{post.project[0].heading}</Link></h2>
								<h2 className="panel__subheading icon-text icon-text--left">
								{dateFns.format(new Date(post.project[0].date), 'MMM D, YYYY')}</h2>
							</div>
						</div>
					</div>
				</div>

				{/* {project.node.childMarkdownRemark.frontmatter.image ? (
					<picture className="panel__background-picture">
							<img className="panel__background-image" src={project.node.childMarkdownRemark.frontmatter.image.publicURL} />
					</picture>
				) : ''} */}
			</div>
			<article className="blog">
				<div className="blog__container">
					<div className="row">
						<div className="column column--md-8">
							<div className="blog__rte">
								{documentToReactComponents(post.content.json)}
							</div>
						</div>
						<aside className="column column--md-4">
							<nav className="side-navigation">
								<ul className="side-navigation__list">
									<li className="side-navigation__item side-navigation__item--heading">
										<h2 className="side-navigation__heading">Blog posts</h2>
									</li>
									{post.project[0].blogPosts
									.sort((a, b) => {
										return new Date(b.date) - new Date(a.date);
									})
									.map(blogPost => (
										<li className="side-navigation__item" key={blogPost.id}>
											<Link className="side-navigation__link" activeClassName="side-navigation__link--current" to={blogPost.path}>{blogPost.heading}</Link>
										</li>
									))}
								</ul>
							</nav>
						</aside>
					</div>
				</div>
			</article>
		</Layout>
	)
}
