import React from 'react';
import Layout from '../site/layouts/default';

export default () => (
	<Layout>
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
					<li className="resume__item"></li>
					<li className="resume__item"></li>
					<li className="resume__item"></li>
					<li className="resume__item"></li>
					<li className="resume__item"></li>
				</ul>
			</section>
			<section className="resume__section">
				<h2 className="resume__heading">Education</h2>
			</section>
			<section className="resume__section">
				<h2 className="resume__heading">Projects</h2>
			</section>
			<section className="resume__section">
				<h2 className="resume__heading">Work Experience</h2>
			</section>
		</div>
	</Layout>
)