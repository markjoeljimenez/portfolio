import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/header'
import '../styles/scss/style.scss'

import getControl from '../scripts/utilities/getControl';

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
				<div className="main__scroll" id="scrollContainer">
					<div className="container">
							{children}
					</div>
					<div className="main__button-container button-container">
						<button aria-controls="scrollContainer" className="main__button" onClick={onClickEvent} onScroll={onClickEvent}><span className="u-hidden">Scroll</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-downward"><path d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z"/></g></g></svg></button>
					</div>
				</div>
			</div>
		</>
		)}
	/>
)

function onClickEvent(e) {
	const scrollContainer = getControl(e.currentTarget);
	const scrollInt = scrollContainer.scrollTop;

	scrollContainer.scrollBy({
		top: scrollInt + 100,
		behavior: 'smooth'
	});
}

export default Layout
