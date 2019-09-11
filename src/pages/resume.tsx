import React from 'react';
import Layout from '../site/layouts/default';
import { StaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import dateFns from 'date-fns';


export default () => {

	return (
		<StaticQuery query={graphql`
		query resumeQuery {
			allContentfulResumeEntry {
				edges {
					node {
						heading
						content {
							json
						}
						resumeMilestones {
							heading
							subheading
							startDate
							endDate
							content {
								json
							}
						}
					}
				}
			}
			site {
				siteMetadata {
					title
					socialMedia {
						icon
						link
						name
					}
				}
			}
		}`}
		render={data => (
			<Layout>
				<section className="resume-panel panel">
					<div className="panel__container">
						<div className="resume">
							<section className="resume__header resume__section">
								<div className="resume__left">
									<h1 className="resume__heading resume__heading--header">{data.site.siteMetadata.title}</h1>
									<p className="resume__address">44 Hillfarm Dr., Toronto, ON. M1V3J9</p>
								</div>
								<div className="resume__right">
									<ul className="resume__list resume__list--header">
										<li className="resume__item">
											<a className="resume__link" href={`tel:${data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'Phone').link}`}>
												<span dangerouslySetInnerHTML={{__html: data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'Phone').icon}}/>
												{data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'Phone').link}
											</a>
										</li>
										<li className="resume__item">
											<a className="resume__link" href={data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'Email').link}>
												<span dangerouslySetInnerHTML={{__html: data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'Email').icon}}/>
												{data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'Email').link}
											</a>
										</li>
										<li className="resume__item">
											<a className="resume__link" href={data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'LinkedIn').link}>
												<span dangerouslySetInnerHTML={{__html: data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'LinkedIn').icon}}/>
												{data.site.siteMetadata.socialMedia.find(socialMediaItem => socialMediaItem.name === 'LinkedIn').link}
											</a>
										</li>
									</ul>
								</div>
							</section>
							{data.allContentfulResumeEntry.edges ? (
								data.allContentfulResumeEntry.edges.map(resumeEntry => (
									<section className="resume__section">
										<h2 className="resume__heading">{resumeEntry.node.heading}</h2>
										{resumeEntry.node.content ? (
											<div className="resume__rte">
												{documentToReactComponents(resumeEntry.node.content.json)}
											</div>
										) : ''}
										{resumeEntry.node.resumeMilestones ? (
											resumeEntry.node.resumeMilestones.map(resumeMilestone => (
												<div className="resume-milestone">
													<div className="resume-milestone__header">
														<div>
															<h2 className="resume-milestone__heading">{resumeMilestone.heading}</h2>
															<h3 className="resume-milestone__subheading">{resumeMilestone.subheading}</h3>
														</div>
														<p className="resume-milestone__date">{dateFns.format(resumeMilestone.startDate, 'MMMM YYYY')} - {dateFns.format(resumeMilestone.endDate, 'MMMM YYYY')}</p>
													</div>
													<div className="resume__rte">
														{documentToReactComponents(resumeMilestone.content.json)}
													</div>
												</div>
											))
										) : ''}
									</section>
								))
							).reverse() : ''}
							{/* <section className="resume__section">
								<h2 className="resume__heading">Education</h2>
								<div className="resume-milestone">
									<div className="resume-milestone__header">
										<h2 className="resume-milestone__heading">Electro-Mechanical Engineer Technician</h2>
										<p className="resume-milestone__date">September 2014 - June 2017</p>
									</div>
									<h3 className="resume-milestone__subheading">George Brown College, Toronto ON</h3>
									<ul className="resume__list resume__list--2">
										<li className="resume__item">Software Programming</li>
										<li className="resume__item">Digital and Embedded Systems</li>
										<li className="resume__item">Interfacing and Robotics</li>
										<li className="resume__item">Engineering Design</li>
									</ul>
								</div>
							</section>
							<section className="resume__section">
								<h2 className="resume__heading">Projects</h2>
								<div className="resume-milestone">
									<div className="resume-milestone__header">
										<h2 className="resume-milestone__heading">torontopearson.com</h2>
										<p className="resume-milestone__date">June 2018 - April 2019</p>
									</div>
									<h3 className="resume-milestone__subheading">Greater Toronto Airport Authority (GTAA)</h3>
									<ul className="resume__list">
										<li className="resume__item">Built prototype in HTML, SCSS, and JavaScript to be used in usability testing</li>
									</ul>
								</div>
								<div className="resume-milestone">
									<div className="resume-milestone__header">
										<h2 className="resume-milestone__heading">petro-canada.ca</h2>
										<p className="resume-milestone__date">January 2018 - July 2019</p>
									</div>
									<h3 className="resume-milestone__subheading">Suncor Inc.</h3>
									<ul className="resume__list">
										<li className="resume__item">Developed prototype in HTML, SCSS, and JavaScript</li>
									</ul>
								</div>
							</section>
							<section className="resume__section">
								<h2 className="resume__heading">Work Experience</h2>
								<div className="resume-milestone">
									<div className="resume-milestone__header">
										<h2 className="resume-milestone__heading">Junior Front-End Developer</h2>
										<p className="resume-milestone__date">January 2018 - Present</p>
									</div>
									<h3 className="resume-milestone__subheading">Habanero Consulting Group</h3>
									<ul className="resume__list">
										<li className="resume__item">Developed prototype in HTML, SCSS, and JavaScript</li>
									</ul>
								</div>
								<div className="resume-milestone">
									<div className="resume-milestone__header">
										<h2 className="resume-milestone__heading">Front-End Developer</h2>
										<p className="resume-milestone__date">June 2014 - Present</p>
									</div>
									<h3 className="resume-milestone__subheading">Freelance</h3>
									<ul className="resume__list">
										<li className="resume__item">Developed prototype in HTML, SCSS, and JavaScript</li>
									</ul>
								</div>
							</section> */}
							<div className="notice">You can download PDF version of my resume <a href="#">here</a></div>
						</div>
					</div>
				</section>
			</Layout>
		)}
		/>
	)
}