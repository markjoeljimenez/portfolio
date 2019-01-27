import React, { ReactElement } from 'react'
import { Link } from 'gatsby'

import getControl from '../scripts/utilities/getControl';

// Research about ref in React
// let button: ReactNode;
const HEADER_EXPANDED_CLASSNAME = 'aside-main__content--expand';

function onMenuClick(e) {
	const header = getControl(e.currentTarget);

	if (header.classList.contains(HEADER_EXPANDED_CLASSNAME)) {
		header.classList.remove(HEADER_EXPANDED_CLASSNAME);
	} else {
		header.classList.add(HEADER_EXPANDED_CLASSNAME);
	}
}

const Header = ({ title, menuPages, logo }) => (
	<>
		<nav className="header">
			<div className="header__container">
				<ul className="header__list">
					{menuPages.map(page => (
						<li className="header__item" key={page.name}>
							<Link to={page.link} activeClassName="header__link--active" className="header__link">{page.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
		{/* <nav className="aside-main">
			<div className="aside-main__content" id="header">
				<div className="aside-main__header">
					<Link to="/">
						<picture className="aside-main__picture">
							<img src={ logo.publicURL } alt={ logo.name } className="aside-main__image" role="presentation"/>
						</picture>
					</Link>
					<h1 className="aside-main__heading">{ title }</h1>
					<p className="aside-main__description">Junior Front-End Developer
						<br/>@ <a href="https://www.habaneroconsulting.com" target="_blank">Habanero Consulting Group</a>
					</p>
				</div>
				<nav className="aside-nav" id="aside-nav">
					<ul className="aside-nav__list">
						{menuPages.map(page => (
							<li className="aside-nav__item" key={page.name}>
								<Link to={page.link} activeClassName="aside-nav__link--active" className="aside-nav__link">{page.name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className="aside-main__navbar-container">
				<button className="aside-main__button button" aria-controls="header" onClick={onMenuClick}><span className="u-hidden">Menu</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<g id="Layer_2" data-name="Layer 2">
							<g id="menu">
							<g id="menu-2" data-name="menu">
								<rect width="18" height="2" x="3" y="11" rx=".95" ry=".95"/>
								<rect width="18" height="2" x="3" y="16" rx=".95" ry=".95"/>
								<rect width="18" height="2" x="3" y="6" rx=".95" ry=".95"/>
							</g>
							</g>
						</g>
					</svg>
				</button>
			</div>
		</nav> */}
	</>
)

export default Header
