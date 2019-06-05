const path = require('path');

exports.createPages = ({actions, graphql}) => {
	const {createPage} = actions;

	return graphql(`{
		allContentfulProject {
			edges {
				node {
					blogPosts {
						heading
						id
						content {
							json
						}
						date
						path
					}
					client
					content {
						json
					}
					date
					display
					featured
					heading
					image {
						fluid {
							src
						}
					}
					internal {
						type
					}
					links {
						githubLink
						githubTitle
						websiteLink
						websiteTitle
					}
					path
					theme
				}
			}
		}
		allContentfulPost {
			edges {
				node {
					path
				}
			}
		}
	}`)
	.then(res => {
		if(res.errors) {
			return Promise.reject(res.errors);
		}

		// Create project pages
		res.data.allContentfulProject.edges.forEach(({node}) => {
			createPage({
				path: node.path,
				component: path.resolve(`src/site/templates/project.tsx`)
			})
		});

		// Create post pages
		res.data.allContentfulPost.edges.forEach(({node}) => {
			createPage({
				path: node.path,
				component: path.resolve(`src/site/templates/post.tsx`)
			})
		});
	})
}

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
	fmImagesToRelative(node);
};