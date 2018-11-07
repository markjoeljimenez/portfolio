import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import '../styles/scss/style.scss'

const Layout = ({ children }) => (
<StaticQuery
	query={graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
				menuPages {
					name
					link
				}
			}
		}
		allFile(filter: { name: { eq: "logo" } }) {
			edges {
				node {
					publicURL
					name
				}
			}
		}
	}
	`}
	render={data => (
	<>
		<Helmet
		title={data.site.siteMetadata.title}
		meta={[
			{ name: 'description', content: 'Sample' },
			{ name: 'keywords', content: 'sample, something' },
		]}
		>
		<html lang="en" />
		</Helmet>
		<Header title={data.site.siteMetadata.title}
				menuPages={data.site.siteMetadata.menuPages}
				logo={data.allFile.edges[0].node}/>
		<div className="main">
			<div className="container">
					{children}
			</div>
		</div>
	</>
	)}
/>
)

export default Layout
