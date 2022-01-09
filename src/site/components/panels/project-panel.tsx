import React from 'react'
import { Link } from '@reach/router'
import IContentfulProject from '../../types/IContentfulProject'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface IProjectPanelProps {
  settings: IContentfulProject
  blogPosts?: any
}

export default class ProjectPanel extends React.Component<IProjectPanelProps> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section
        className={`panel${
          this.props.settings.theme.length !== 0
            ? ` panel--has-background-color ${this.props.settings.theme
                .map(theme => `panel--${theme.toLowerCase()}`)
                .join(' ')}`
            : ''
        }${!this.props.settings.featured ? ' insight-panel' : ''}`}
      >
        <div className="panel__container">
          <div className="row">
            {this.props.settings.featured ? (
              <div className="column column--md-6">
                {this.props.settings.image ? (
                  <picture className="panel__picture">
                    <img
                      className="panel__image"
                      src={this.props.settings.image.fluid.src}
                      alt={this.props.settings.image.description}
                    />
                  </picture>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            <div
              className={`panel__content column column--md-${
                this.props.settings.featured ? '6' : '8'
              }`}
            >
              <div className="panel__header">
                <h2 className="panel__heading">
                  {this.props.settings.path &&
                  this.props.settings.links.websiteLink
                    ? this.props.settings.links &&
                      this.props.settings.featured && (
                        <a
                          href={this.props.settings.links.websiteLink}
                          target="_blank"
                          rel="noreffer"
                        >
                          {this.props.settings.heading}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <g data-name="Layer 2">
                              <g data-name="external-link">
                                <rect width="24" height="24" opacity="0" />
                                <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                                <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                              </g>
                            </g>
                          </svg>
                        </a>
                      )
                    : this.props.settings.heading}
                  {/* {this.props.settings.workInProgress ? <span className='pill pill--yellow'>WIP</span> : ''} */}
                </h2>
                {this.props.settings.client ? (
                  <p className="panel__client">{this.props.settings.client}</p>
                ) : (
                  ''
                )}
              </div>

              {this.props.settings.content.json ? (
                <div className="panel__short-description">
                  {documentToReactComponents(this.props.settings.content.json)}
                </div>
              ) : (
                ''
              )}

              {this.props.settings.technologies ? (
                <ul className="technologies-list">
                  {this.props.settings.technologies.map((technology, i) => (
                    <li className="technologies-list__pill pill" key={i}>
                      {technology}
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}

              {this.props.settings.links ? (
                <div className="panel__footer">
                  <ul className="panel__list">
                    {this.props.settings.links.websiteLink &&
                    !this.props.settings.featured ? (
                      <li className="panel__item">
                        <a
                          href={this.props.settings.links.websiteLink}
                          className="panel__link panel__link--icon"
                          target="_blank"
                          rel="noreffer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                          >
                            <g data-name="Layer 2">
                              <g data-name="globe">
                                <rect
                                  width="24"
                                  height="24"
                                  transform="rotate(180 12 12)"
                                  opacity="0"
                                />
                                <path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z" />
                              </g>
                            </g>
                          </svg>
                          {this.props.settings.links.websiteTitle}
                        </a>
                      </li>
                    ) : (
                      ''
                    )}

                    {this.props.settings.links.githubLink ? (
                      <li className="panel__item">
                        <a
                          href={this.props.settings.links.githubLink}
                          className="panel__link panel__link--icon"
                          target="_blank"
                          rel="noreffer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                          >
                            <g data-name="Layer 2">
                              <rect
                                width="24"
                                height="24"
                                transform="rotate(180 12 12)"
                                opacity="0"
                              ></rect>
                              <path
                                d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"
                                data-name="github"
                              ></path>
                            </g>
                          </svg>
                          {this.props.settings.links.githubTitle || null}
                        </a>
                      </li>
                    ) : (
                      ''
                    )}
                  </ul>
                </div>
              ) : (
                ''
              )}
            </div>
            {/* {this.props.settings.blogPosts && !this.props.settings.featured ? (
              <div
                className={`column column--md-4 ${
                  this.props.settings.blogPosts.length < 1
                    ? 'column--md-hidden'
                    : ''
                }`}
              >
                <ul className="panel__list">
                  {this.props.settings.blogPosts
                    .sort((a, b) => {
                      return (
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                      )
                    })
                    .map(post => (
                      <li className="panel__item" key={post.id}>
                        <Link to={post.path}>{post.heading}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              ''
            )} */}
          </div>
        </div>
      </section>
    )
  }
}
