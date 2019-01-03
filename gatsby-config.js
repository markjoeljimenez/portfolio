module.exports = {
	siteMetadata: {
		title: `Mark Joel Jimenez`,
		menuPages: [
			{
				link: `/`,
				name: `Home`
			},
			{
				link: `/projects`,
				name: `Projects`
			},
			{
				link: `/blog`,
				name: `Blog`
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
		`gatsby-plugin-typescript`,
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
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
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts/`,
				name: `posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/projects/`,
				name: `projects`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`,
					},
					{
						resolve: `gatsby-remark-custom-blocks`,
						options: {
							blocks: {
								danger: {
									classes: `custom-block-danger`,
								},
								info: {
									classes: `custom-block-info`,
									title: `optional`,
								}
							}
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
						  	maxWidth: 590,
						}
					}
				]
			}
		},
		`gatsby-plugin-netlify-cms`
	],
}
