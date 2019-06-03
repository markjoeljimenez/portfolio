import React from 'react';
import { INetlifyProjectFrontmatter } from '../../types/INetlify';
import { Link } from '@reach/router';

interface IProjectPanelProps {
	frontmatter: INetlifyProjectFrontmatter;
	excerpt: string;
	blogPosts?: any;
}

export default class ProjectPanel extends React.Component<IProjectPanelProps> {
	constructor(props) {
		super(props);
	}

	render() {
		const reverse = (this.props.frontmatter.reverse ? ' panel--reverse' : '');
		const isLight = (this.props.frontmatter.theme === 'Light' ? ' panel--light panel--has-background-color' : '');
		const isDark = (this.props.frontmatter.theme === 'Dark' ? ' panel--dark panel--has-background-color' : '');
		const isDefault = (this.props.frontmatter.theme === 'Default' ? ' panel--default panel--has-background-color' : '');

		return (
			<section className={`panel${isLight}${isDark}${isDefault}${reverse}${!this.props.frontmatter.featured ? ' insight-panel' : ''}`}>
				<div className="panel__container">
					<div className="row">
						{this.props.frontmatter.image && this.props.frontmatter.featured ? (
							<div className="column column--md-6">
								<picture className="panel__picture">
									<img className="panel__image" src={this.props.frontmatter.image.publicURL} />
								</picture>
							</div>
						) : ''}
						<div className={`panel__content column column--md-${this.props.frontmatter.featured ? '6' : '7'}`}>
							<div className="panel__header">
								<h2 className="panel__heading">
									{this.props.frontmatter.website.websiteLink || this.props.frontmatter.path ? (
										this.props.frontmatter.website.websiteLink ? (
											<a href={this.props.frontmatter.website.websiteLink}>{this.props.frontmatter.title}</a>
										) : (
											<Link to={this.props.frontmatter.path}>{this.props.frontmatter.title}</Link>
										)
									) : (
										this.props.frontmatter.title
									)}
									{this.props.frontmatter.workInProgress ? <span className='pill pill--yellow'>WIP</span> : ''}
								</h2>
								{this.props.frontmatter.client ? (
									<p className="panel__client">
										{this.props.frontmatter.client}
									</p>
								) : ''}
							</div>
							<div className="panel__short-description" dangerouslySetInnerHTML={{__html: this.props.excerpt}}/>
							{this.props.frontmatter.website ? (
								<div className="panel__footer">
									<ul className="panel__list">
									{this.props.frontmatter.website.websiteLink && !this.props.frontmatter.featured ? (
										<li className="panel__item">
											<a href={this.props.frontmatter.website.websiteLink} className="panel__link panel__link--icon">
												<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g></svg>
												{this.props.frontmatter.website.websiteTitle}
											</a>
										</li>
									) : ''}

									{this.props.frontmatter.website.githubLink ? (
										<li className="panel__item">
											<a href={this.props.frontmatter.website.githubLink} className="panel__link panel__link--icon">
												<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"></path></g></svg>
												{this.props.frontmatter.website.githubTitle || null}
											</a>
										</li>
									) : ''}
									</ul>
								</div>
							) : ''}
						</div>
						{this.props.blogPosts && !this.props.frontmatter.featured ? (
							<div className={`column column--md-3 column--md-push-1 ${this.props.blogPosts.length < 1 ? 'column--md-hidden': ''}`}>
								<ul className="panel__list">
									{this.props.blogPosts
									.sort((a, b) => {
										return new Date(b.node.childMarkdownRemark.frontmatter.date) - new Date(a.node.childMarkdownRemark.frontmatter.date);
									})
									.map(post => (
										<li className="panel__item" key={post.node.id}>
											<Link to={post.node.childMarkdownRemark.frontmatter.path}>{post.node.childMarkdownRemark.frontmatter.title}</Link>
										</li>
									))}
								</ul>
							</div>
						) : ''}
					</div>
				</div>
			</section>
		)
	}
}