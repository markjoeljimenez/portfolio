import * as React from 'react';

export default ( {socialMedia }) => {
	return (
		<footer className="footer">
			<div className="container">
				<nav className="footer__nav">
					<ul className="footer__list">
						{socialMedia.map((socialMediaLink, i) => (
							<li className="footer__item" key={`social-media-${i}`}>
								<a className="footer__link" href={socialMediaLink.link} target="_blank" rel="noopener noreferrer">
									<div className="footer__icon" dangerouslySetInnerHTML={{ __html: socialMediaLink.icon }} />
									{socialMediaLink.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	)
}