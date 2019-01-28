import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/default'

const IndexPage = () => (
	<Layout>
		{/* <div className="intro">
			<h1>Hello!</h1>
			<p>My name is Mark Jimenez. I am a recent graduate from George Brown College and majored in Electro-Mechanical Engineering. Although my studies involved hardware, my passion lies within -code-. Since then, I have been elevating this passion of mine onto a more professional level by self-teaching and getting involved in the web development community.</p>
			<p>As a result of months and months of learning, I have recently obtained a Junior Front-End Developer internship at Habanero Consulting Group. On the side, I am working free-lance where I have worked with 2 clients in the past year.</p>
			<p>I love to invent, innovate, and expand on new ideas using what I've learned in college and what I'm currently learning throughout my career as a Web Developer.</p>
		</div> */}
		<div className="hero-panel panel">
			<div className="panel__container">
				<h1>Let's skip introductions
					<br/>and get to <a href="">work</a>.
				</h1>
			</div>
		</div>

		<div className="panel panel--light panel--has-background">
			<div className="panel__container">
				<div className="row">
					<div className="column column--md-6">
						<picture className="panel__picture">
							<img className="panel__image" src="https://via.placeholder.com/540x400" />
						</picture>
					</div>
					<div className="column column--md-6">
						<div className="panel__header">
							<h2 className="panel__heading">petro-canada.ca</h2>
							<p className="panel__subheading">Suncor Energy</p>
						</div>
						<div className="panel__rte">
							<p>This was my first project as an intern at Habanero Consulting Group.  I was tasked to develop the prototype of the website using technologies such as HTML (Handlebars), SCSS, and TypeScript. I was also able to experiment with Node.js, Webpack, and Gulp to set up a boilerplate.</p>
						</div>
						<div className="panel__footer">
							<a href="#" className="panel__link">petro-canada.ca</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="panel">
			<div className="panel__container">
				<div className="row">
					<div className="column column--md-6">
						<div className="panel__header">
							<h2 className="panel__heading">torontopearson.ca</h2>
							<p className="panel__subheading">GTAA (Greater Toronto Airport Authority</p>
						</div>
						<div className="panel__rte">
							<p>Near the end of my intership, I was brought on to the website redesign project for torontopearson.com.  Identical to the work I was doing on Suncor, I was also tasked to develop the prototype with HTML (Handlebars), SCSS, and TypeScript.</p>
							<p>I also started learning React and Redux to help display Pearson’s large amounts of flight data.</p>
							<p>I was also able to work more with a CMS called Sitecore which involves knowledge of the MVC architecture and C#.</p>
						</div>
						<div className="panel__footer">
							<a href="#" className="panel__link">petro-canada.ca</a>
						</div>
					</div>
					<div className="column column--md-6">
						<picture className="panel__picture">
							<img className="panel__image" src="https://via.placeholder.com/540x400" />
						</picture>
					</div>
				</div>
			</div>
		</div>

		<div className="panel panel--dark">
			<div className="panel__container">
				<div className="row">
					<div className="column">
						<h2>Like what you see so far?</h2>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default IndexPage
