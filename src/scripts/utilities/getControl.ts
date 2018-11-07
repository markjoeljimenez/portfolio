export default function getControl(element: HTMLElement) {
	const ariaControls = element.getAttribute('aria-controls');

	if (ariaControls) {
		return document.getElementById(ariaControls);
	}
}
