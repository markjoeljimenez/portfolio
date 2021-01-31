import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../site/layouts/default'
import ProjectPanel from '../site/components/panels/project-panel'
import ContactPanel from '../site/components/panels/contact-panel'
import SocialMedia from '../site/components/social-media'

export default () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
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
        allContentfulProject {
          edges {
            node {
              blogPosts {
                path
                id
                heading
                date
                content {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              content {
                json
              }
              order
              client
              date
              display
              featured
              heading
              image {
                description
                fluid {
                  src
                }
              }
              links {
                githubLink
                githubTitle
                websiteLink
                websiteTitle
              }
              path
              technologies
              theme
            }
          }
        }
        file {
          publicURL
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <div className="hero-panel panel">
            <div className="panel__container">
              <picture className="hero-panel__picture">
                <img
                  className="hero-panel__image"
                  src={data.file.publicURL}
                  alt="Headshot picture"
                />
              </picture>
              <h1 className="hero-panel__heading">Mark Jimenez</h1>
              <p className="hero-panel__summary">
                I develop websites with an optimized and accessibility driven
                mindset.
              </p>
              <SocialMedia links={data.site.siteMetadata.socialMedia} />
            </div>
          </div>

          <section id="work">
            {data.allContentfulProject.edges
              .filter(project => project.node.featured && project.node.display)
              .sort(
                (a, b) =>
                  new Date(b.node.date).getTime() -
                  new Date(a.node.date).getTime()
              )
              .map((project, i) => (
                <ProjectPanel key={i} settings={project.node} />
              ))}
          </section>

          <ContactPanel />

          <section id="projects">
            {data.allContentfulProject.edges
              .filter(project => !project.node.featured && project.node.display)
              .sort((a, b) =>
                a.node.order && b.node.order
                  ? a.node.order - b.node.order
                  : new Date(b.node.date).getTime() -
                    new Date(a.node.date).getTime()
              )
              .map((project, i) => (
                <ProjectPanel key={i} settings={project.node} />
              ))}
          </section>
        </Layout>
      </>
    )}
  />
)
