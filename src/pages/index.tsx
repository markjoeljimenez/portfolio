import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import Layout from '../layouts/default';

const IndexPage = () => (
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
		render={data => {
			return (
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

					{data.allFile.edges.sort((a, b) => {
						return new Date(b.node.childMarkdownRemark.frontmatter.date) - new Date(a.node.childMarkdownRemark.frontmatter.date);
					}).map(project => {
						const frontmatter = project.node.childMarkdownRemark.frontmatter;
						console.log(project);

						const reverse = (frontmatter.reverse ? ' panel--reverse' : '');
						const isLight = (frontmatter.theme === 'Light' ? ' panel--light panel--has-background-color' : '');
						const isDark = (frontmatter.theme === 'Dark' ? ' panel--dark panel--has-background-color' : '');

						if (frontmatter.featured) {
							return (
								<div className={`panel${isLight}${isDark}${reverse}`} id="work" key={project.node.id}>
									<div className="panel__container">
										<div className="row">
											<div className="column column--md-6">
												<picture className="panel__picture">
													<img className="panel__image" src={frontmatter.image.publicURL} />
												</picture>
											</div>
											<div className="panel__content column column--md-6">
												<div className="panel__header">
													<h2 className="panel__heading">{project.node.childMarkdownRemark.frontmatter.title} {(project.node.childMarkdownRemark.frontmatter.workInProgress ? <span className='pill pill--yellow'>WIP</span> : '')}</h2>
													<p className="panel__client">
														{project.node.childMarkdownRemark.frontmatter.client}
													</p>
												</div>
												<div className="panel__short-description" dangerouslySetInnerHTML={{__html: project.node.childMarkdownRemark.excerpt}}/>
												{/* <div className="panel__footer">
													<a href={project.node.childMarkdownRemark.frontmatter.website.websiteLink} className="panel__link panel__link--icon">
													<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g></svg>
														{project.node.childMarkdownRemark.frontmatter.website.websiteTitle}
													</a>
												</div> */}
											</div>
										</div>
									</div>
								</div>)
						} else {
							return
						}
					})}

					<div className="hightlight-panel panel panel--dark panel--has-background-color panel--small-spacing panel--text-align-center">
						<div className="panel__container">
							<div className="row">
								<div className="column">
									<h2 className="panel__heading"><strong>Interested in working together?</strong></h2>
									<p className="panel__subheading panel__subheading--large text text--light">Send me a message and let's get started!</p>
									<a className="highlight-panel__button button">Contact me</a>
								</div>
							</div>
						</div>
					</div>

					{data.allFile.edges.map(project => {
						const frontmatter = project.node.childMarkdownRemark.frontmatter;

						const reverse = (frontmatter.reverse ? ' panel--reverse' : '');
						const isLight = (frontmatter.theme === 'Light' ? ' panel--light panel--has-background-color' : '');
						const isDark = (frontmatter.theme === 'Dark' ? ' panel--dark panel--has-background-color' : '');

						if (!frontmatter.featured && project.node.sourceInstanceName === 'projects') {
							return (
								<div className={`panel${isLight}${isDark}${reverse}`} id="insights" key={project.node.id}>
									<div className="panel__container">
										<div className="row">
											<div className="panel__content column column--md-7">
												<div className="panel__header">
													<h2 className="panel__heading">{frontmatter.title} {(project.node.childMarkdownRemark.frontmatter.workInProgress ? <span className='pill pill--yellow'>WIP</span> : '')}</h2>
												</div>
												<div className="panel__short-description" dangerouslySetInnerHTML={{__html: project.node.childMarkdownRemark.excerpt}}/>
												{/* <div className="panel__footer">
													<a href={project.node.childMarkdownRemark.frontmatter.website.websiteLink} className="panel__link panel__link--icon">
													<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g></svg>
														{project.node.childMarkdownRemark.frontmatter.website.websiteTitle}
													</a>
												</div> */}
												{/* <picture className="panel__picture">
													<img className="panel__image" src={frontmatter.image.publicURL} />
												</picture> */}
											</div>
											<div className="column column--md-4 column--push-md-1">
												<ul className="panel__list">
													{data.allFile.edges.filter((data) => (
														data.node.sourceInstanceName === 'posts'
													))
													.sort((a, b) => {
														return new Date(b.node.childMarkdownRemark.frontmatter.date) - new Date(a.node.childMarkdownRemark.frontmatter.date);
													})
													.map(post => (
														<li className="panel__item" key={post.node.id}>
															<Link to={post.node.childMarkdownRemark.frontmatter.path}>{post.node.childMarkdownRemark.frontmatter.title}</Link>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>)
						} else {
							return
						}
					})}
				</Layout>
			</>
		)}}
	/>
)

export default IndexPage
