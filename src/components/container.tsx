import * as React from 'react';
import getControl from '../scripts/utilities/getControl';

const debounce = require('lodash.debounce');

export default ({children, alignment}) => {
	return (
		<div className={`main__scroll ${alignment ? `main__scroll--${alignment}` : ''}`} id="scrollContainer" onScroll={(e) => {
			e.persist(); 
			onScrollEvent();
		}}>
			<div className="container">
					{children}
			</div>
			<div className="main__button-container button-container">
				<button aria-controls="scrollContainer" className="main__button" onClick={toggleScrollButton}><span className="u-hidden">Scroll</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-downward"><path d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z"/></g></g></svg></button>
			</div>
		</div>
	)
}

const onScrollEvent = debounce(toggleScrollButton, 50);

function toggleScrollButton(e) {
	const mainButtonContainer = document.querySelector<HTMLElement>('.main__button-container');
	const scrollContainer = document.querySelector<HTMLElement>('#scrollContainer');
	const containerHeight = Math.round(scrollContainer.querySelector<HTMLElement>('.container').clientHeight);
	const scrollHeight = Math.round(scrollContainer.scrollTop + scrollContainer.clientHeight);
	
	if (e) {
		if (containerHeight !== scrollHeight) {
			scrollContainer.scrollBy({
				top: scrollContainer.scrollTop + 100,
				behavior: 'smooth'
			});
		} else {
			mainButtonContainer.style.opacity = '0';
		}
	} else if (containerHeight === scrollHeight) {
		mainButtonContainer.style.opacity = '0';
	} else {
		mainButtonContainer.style.opacity = '1';
	}
}