import React, { ReactElement } from 'react'
import { Link } from 'gatsby'

import getControl from '../scripts/utilities/getControl';

// Research about ref in React
// let button: ReactNode;
const HEADER_EXPANDED_CLASSNAME = 'header--active';

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
		<nav className="header" id="header">
			<div className="header__container">
				<button aria-controls="header" className="header__button" onClick={onMenuClick}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g></svg>
					<span className="u-hidden">Open navigation</span>
				</button>
				<ul className="header__list">
					{menuPages.map(page => (
						<li className="header__item" key={page.name}>
							<Link to={page.link} activeClassName="header__link--active" className="header__link">{page.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	</>
)

export default Header
