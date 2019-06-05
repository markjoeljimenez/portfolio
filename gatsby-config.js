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
		`gatsby-plugin-sass`,
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
