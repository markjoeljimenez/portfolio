require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Mark Joel Jimenez`,
		menuPages: [
			{
				link: `/`,
				name: `Home`
			},
			{
				link: `/#work`,
				name: `Work`
			},
			{
				link: `/#projects`,
				name: `Projects`
			},
			{
				link: `/resume`,
				name: `Resume`
			}
		],
		socialMedia: [
			{
				link: `https://github.com/markjoeljimenez`,
				name: `Github`,
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g></svg>`
			},
			{
				link: `https://linkedin.com/markjoeljimenez`,
				name: `LinkedIn`,
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"/><rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9"/><circle cx="5.25" cy="5.25" r="2.25"/></g></g></svg>`
			},
			{
				link: `mailto:markjoeljimenez@gmail.com`,
				name: `Email`,
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z"/></g></g></svg>`
			},
			{
				link: `tel:647-861-0617`,
				name: `Phone`,
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="phone"><rect width="24" height="24" opacity="0"/><path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22zM6.6 4A2.61 2.61 0 0 0 4 6.6 13.41 13.41 0 0 0 17.4 20a2.61 2.61 0 0 0 2.6-2.6v-.33L15.36 16l-.29.55c-.45.87-.78 1.5-1.62 1.16a11.85 11.85 0 0 1-7.18-7.21c-.36-.78.32-1.14 1.18-1.59L8 8.64 6.93 4z"/></g></g></svg>`
			}
		]
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo.svg`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				postCssPlugins: [
					require('postcss-inline-svg')({
						path: 'src/'
					})
				]
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-plugin-typescript`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `whjch1nhywzb`,
				accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `whjch1nhywzb`,
				accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
				host: `preview.contentful.com`
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/assets`,
				name: `assets`
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/`,
				name: `images`
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				"excerpt_separator": `<!-- end -->`,
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`,
					},
					{
						resolve: `gatsby-remark-custom-blocks`,
						options: {
							blocks: {
								info: {
									classes: `highlight`,
									title: `optional`,
								}
							}
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 720,
							showCaptions: true
						}
					}
				]
			}
		}
	],
}
