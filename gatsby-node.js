const path = require('path');

exports.createPages = ({actions, graphql}) => {
	const {createPage} = actions;

	return graphql(`{
		allFile(
			filter: { extension: { eq: "md"} }
		) {
			edges {
				node {
					sourceInstanceName
					childMarkdownRemark {
						frontmatter {
							title
							path
							image {
								publicURL
							}
							tag
						}
						html
					}
					extension
				}
			}
		}
	}`)
	.then(res => {
		if(res.errors) {
			return Promise.reject(res.errors);
		}

		res.data.allFile.edges.forEach(({node}) => {
			createPage({
				path: node.childMarkdownRemark.frontmatter.path,
				component: path.resolve(`src/templates/${node.sourceInstanceName}.tsx`)
			})
		})
	})
}