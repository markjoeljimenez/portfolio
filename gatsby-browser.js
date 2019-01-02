/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = () => {
	toggleScrollButton();
}

exports.onClientEntry = () => {
	toggleScrollButton();
}

function toggleScrollButton() {
	const content = document.querySelector('.container');

	if (content) {
		const container = content.parentElement;

		if (container) {
			const containerHeight = container.getBoundingClientRect().height;
			const contentHeight = content.getBoundingClientRect().height;

			const scrollButton = container.querySelector('.main__button-container');
			
			if (scrollButton instanceof HTMLElement && contentHeight < containerHeight) {
				scrollButton.style.display = 'none';
			}
		}
	}
}