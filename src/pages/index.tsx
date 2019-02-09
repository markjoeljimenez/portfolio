import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import remark from 'remark';
import remarkHtml from 'remark-html';

import Layout from '../layouts/default';


const IndexPage = () => (
	<StaticQuery
		query={graphql`
		query IndexQuery {
			allFile(
				filter: { extension: { eq: "md"} }
			) {
				edges {
					node {
						id
						sourceInstanceName
						childMarkdownRemark {
							frontmatter {
								title
								shortDescription
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
					{/* <div className="intro">
						<h1>Hello!</h1>
						<p>My name is Mark Jimenez. I am a recent graduate from George Brown College and majored in Electro-Mechanical Engineering. Although my studies involved hardware, my passion lies within -code-. Since then, I have been elevating this passion of mine onto a more professional level by self-teaching and getting involved in the web development community.</p>
						<p>As a result of months and months of learning, I have recently obtained a Junior Front-End Developer internship at Habanero Consulting Group. On the side, I am working free-lance where I have worked with 2 clients in the past year.</p>
						<p>I love to invent, innovate, and expand on new ideas using what I've learned in college and what I'm currently learning throughout my career as a Web Developer.</p>
					</div> */}
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

					{data.allFile.edges.map(project => {
						const frontmatter = project.node.childMarkdownRemark.frontmatter;

						const reverse = (frontmatter.reverse ? ' panel--reverse' : '');
						const isLight = (frontmatter.theme === 'Light' ? ' panel--light panel--has-background' : '');
						const isDark = (frontmatter.theme === 'Dark' ? ' panel--dark panel--has-background' : '');

						const content = remark()
							.use(remarkHtml)
							.processSync(frontmatter.shortDescription).toString();

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
													<h2 className="panel__heading">{project.node.childMarkdownRemark.frontmatter.title}</h2>
													<p className="panel__client">
														{project.node.childMarkdownRemark.frontmatter.client}
														{(project.node.childMarkdownRemark.frontmatter.workInProgress ? <span className='pill pill--yellow'>WIP</span> : '')}
													</p>
												</div>
												<p className="panel__short-description" dangerouslySetInnerHTML={{__html: content}}/>
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

					{/* <div className="panel panel--light panel--has-background" id="work">
						<div className="panel__container">
							<div className="row">
								<div className="column column--md-6">
									<picture className="panel__picture">
										<img className="panel__image" src="https://via.placeholder.com/540x400" />
									</picture>
								</div>
								<div className="panel__content column column--md-6">
									<div className="panel__header">
										<h2 className="panel__heading">petro-canada.ca</h2>
										<p className="panel__client">Suncor Energy</p>
									</div>
									<div className="panel__rte">
										<p>This was my first project as an intern at Habanero Consulting Group.  I was tasked to develop the prototype of the website using technologies such as HTML (Handlebars), SCSS, and TypeScript.</p>
										<p>I was also able to experiment with Node.js, Webpack, and Gulp to set up a boilerplate.</p>
									</div>
									<div className="panel__footer">
										<a href="#" className="panel__link panel__link--icon">
										<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g></svg>
										petro-canada.ca
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="panel panel--reverse">
						<div className="panel__container">
							<div className="row">
								<div className="panel__content column column--md-6">
									<div className="panel__header">
										<h2 className="panel__heading">torontopearson.ca</h2>
										<p className="panel__client">GTAA (Greater Toronto Airport Authority)</p>
									</div>
									<div className="panel__rte">
										<p>Near the end of my intership, I was brought on to the website redesign project for torontopearson.com.  Identical to the work I was doing on Suncor, I was also tasked to develop the prototype with HTML (Handlebars), SCSS, and TypeScript.</p>
										<p>I also started learning React and Redux to help display Pearson’s large amounts of flight data.</p>
										<p>I was also able to work more with a CMS called Sitecore which involves knowledge of the MVC architecture and C#.</p>
									</div>
									<div className="panel__footer">
										<a href="#" className="panel__link panel__link--icon">
											<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g></svg>
											torontopearson.ca
										</a>
									</div>
								</div>
								<div className="column column--md-6">
									<picture className="panel__picture">
										<img className="panel__image" src="https://via.placeholder.com/540x400" />
									</picture>
								</div>
							</div>
						</div>
					</div> */}

					<div className="hightlight-panel panel panel--dark panel--has-background panel--small-spacing panel--text-align-center">
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
						const isLight = (frontmatter.theme === 'Light' ? ' panel--light panel--has-background' : '');
						const isDark = (frontmatter.theme === 'Dark' ? ' panel--dark panel--has-background' : '');

						if (!frontmatter.featured && project.node.sourceInstanceName === 'projects') {
							return (
								<div className={`panel${isLight}${isDark}${reverse}`} id="insights" key={project.node.id}>
									<div className="panel__container">
										<div className="row">
											<div className="panel__content column column--md-7">
												<div className="panel__header">
													<h2 className="panel__heading">{frontmatter.title}</h2>
												</div>
												<p className="panel__short-description" dangerouslySetInnerHTML={{__html: frontmatter.shortDescription}}/>
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
													.map(post => (
														<li className="panel__item" key={post.node.id}>
															<a href='#'>{post.node.childMarkdownRemark.frontmatter.title}</a>
														</li>
													))}
													{/* <li className="panel__item">Switching to Yahoo! Sports</li>
													<li className="panel__item">Player filtering strategy</li>
													<li className="panel__item">Initial thoughts</li> */}
												</ul>
											</div>
										</div>
									</div>
								</div>)
						} else {
							return
						}
					})}

					{/* <div className="panel panel--reverse panel--has-background panel--light">
						<div className="panel__container">
							<div className="row">
								<div className="column column--md-7">
									<div className="panel__header">
										<h2 className="panel__heading">NBA lineup optimizer</h2>
									</div>
									<div className="panel__rte">
										<p>Alongside learning Javascript and Typescript, I also started learning about algorithms; more specifically, the knapsack problem. Knowing how to solve this particular problem, we could determine what the best roster is to draft in fantasy basketball.</p>
									</div>
									<div className="panel__footer">
										<a href="#" className="panel__link">
											Learn more
										</a>
									</div>
								</div>
								<div className="panel__content column column--md-4 column--push-md-1">
									<ul className="panel__list">
										<li className="panel__item">Switching to Yahoo! Sports</li>
										<li className="panel__item">Player filtering strategy</li>
										<li className="panel__item">Initial thoughts</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="panel panel--reverse">
						<div className="panel__container">
							<div className="row">
								<div className="panel__content column column--md-4 column--push-md-1">
									<ul className="panel__list">
										<li className="panel__item">Research phase</li>
										<li className="panel__item">Web scraping and CRUD strategy</li>
									</ul>
								</div>
								<div className="column column--md-7">
									<div className="panel__header">
										<h2 className="panel__heading">TTC subway map</h2>
									</div>
									<div className="panel__rte">
										<p>Now there’s only one thing that’s consistent with Toronto’s transit system: it’s weekend subway closures.</p>
										<p>For someone who rides the subway often, it’s a little annoying having to open up TTC’s website just to check what stations are out of service. So I thought it would be a cool idea to make a homemade subway map, complete with LED indicators and real time status updates.</p>
									</div>
									<div className="panel__footer">
										<a href="#" className="panel__link">
											Learn more
										</a>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</Layout>
			</>
		)}}
	/>
)

export default IndexPage
