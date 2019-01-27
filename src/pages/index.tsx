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
			<h1>Let's skip introductions
				<br/>and get to <a href="">work</a>.
			</h1>
		</div>
	</Layout>
)

export default IndexPage
