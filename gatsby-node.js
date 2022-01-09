const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulProject {
        edges {
          node {
            path
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
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    // Create project pages
    res.data.allContentfulProject.edges.forEach(({ node }) => {
      createPage({
        path: '/',
        component: path.resolve(`src/site/templates/project.tsx`),
      })
    })

    // Create post pages
    res.data.allContentfulPost.edges.forEach(({ node }) => {
      createPage({
        path: '/',
        component: path.resolve(`src/site/templates/post.tsx`),
      })
    })
  })
}
