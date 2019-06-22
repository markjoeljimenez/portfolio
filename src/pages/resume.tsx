import React from 'react';
import Layout from '../site/layouts/default';

export default () => (
	<Layout>
		<section className="panel">
			<div className="panel__container">
				<div className="resume">
					<section className="resume__header resume__section">
						<div className="resume__left">
							<h1 className="resume__heading resume__heading--header">Mark Joel Jimenez</h1>
							<p className="resume__address">44 Hillfarm Dr., Toronto, ON. M1V3J9</p>
						</div>
						<div className="resume__right">
							<ul className="resume__list resume__list--header">
								<li className="resume__item">Phone</li>
								<li className="resume__item">Email</li>
								<li className="resume__item">LinkedIn</li>
								<li className="resume__item">Website</li>
							</ul>
						</div>
					</section>
					<section className="resume__section">
						<h2 className="resume__heading">Summary of Qualifications</h2>
						<ul className="resume__list">
							<li className="resume__item">Developed websites in <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b></li>
							<li className="resume__item">Exposed to back-end programming such as PHP and NodeJS</li>
							<li className="resume__item">Familiar with Content Management Systems such as Sitecore, Contentful and Wordpress</li>
							<li className="resume__item">Knowledgeable in version control systems such as Git and Microsoft TFS</li>
							<li className="resume__item">Experience with creating HTML email templates</li>
							<li className="resume__item">Strong capabilities in attention to detail, organization and time management skills</li>
						</ul>
					</section>
					<section className="resume__section">
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
					</section>
					<div className="notice">You can download PDF version of my resume <a href="#">here</a></div>
				</div>
			</div>
		</section>
	</Layout>
)