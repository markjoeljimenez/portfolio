import React from 'react';

export default ({ links }) => (
	<nav className="social-media">
		<ul className="social-media__list">
			{links.map((link, i) => (
				<li className="social-media__item" key={`social-media-${i}`}>
					<a className="social-media__link" href={link.link} target="_blank" rel="noopener noreferrer">
						<div className="social-media__icon" dangerouslySetInnerHTML={{ __html: link.icon }} />
						{link.name}
					</a>
				</li>
			))}
		</ul>
	</nav>
)