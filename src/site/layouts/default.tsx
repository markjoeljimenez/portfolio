import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';
import '../../styles/scss/style.scss';

const Layout = ({ children }) => {
	useEffect(() => {
		main.current.style.paddingTop = window.getComputedStyle(header.current).height;
	});
	
	const header = useRef();
	const main = useRef();

	return (
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
							socialMedia {
								icon
								link
								name
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
						logo={data.allFile.edges[0].node}
						headerRef={header}/>
					<div className="main" ref={main}>
						{children}
					</div>
				<Footer socialMedia={data.site.siteMetadata.socialMedia}/>
			</>
			)}
		/>
	)
}

export default Layout
