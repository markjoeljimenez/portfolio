import React from 'react'
import { Link } from 'gatsby'

import getControl from '../../scripts/utilities/getControl';

const HEADER_EXPANDED_CLASSNAME = 'header--active';

interface IMenuPages {
	link: string;
	name: string;
}

interface IHeader {
	logo: ILogo;
	menuPages: IMenuPages[];
	title: string;
	headerRef: any;
}

interface ILogo {
	name: string;
	publicURL: string;
}

export default class Header extends React.Component<IHeader> {
	private headerButtonRef: any;

	constructor(props) {
		super(props);

		this.headerButtonRef = React.createRef();
		this.onMenuClick = this.onMenuClick.bind(this);
	}

	private onMenuClick() {
		const header = getControl(this.headerButtonRef.current);

		if (header.classList.contains(HEADER_EXPANDED_CLASSNAME)) {
			header.classList.remove(HEADER_EXPANDED_CLASSNAME);
		} else {
			header.classList.add(HEADER_EXPANDED_CLASSNAME);
		}
	}

	render() {
		return (
			<nav className="header" id="header" data-overflow-scroll ref={this.props.headerRef}>
				<div className="header__container">
					<button aria-controls="header" className="header__button" ref={this.headerButtonRef} onClick={this.onMenuClick}>
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g></svg>
						<span className="u-hidden">Open navigation</span>
					</button>
					<div className="header__scroll">
						<ul className="header__list">
							{this.props.menuPages.map(page => (
								<li className="header__item" key={page.name}>
									<a href={page.link} className="header__link">{page.name}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
