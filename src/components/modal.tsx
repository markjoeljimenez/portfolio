import React from 'react';

interface IModalProps {
	children?: React.ReactNode;
	modalRef?: React.Ref<HTMLDivElement>;
	toggleModalVisibility: () => void;
	hidden: boolean;
}

export default class Modal extends React.Component<IModalProps> {
	constructor(props) {
		super(props);
	}

	// public componentDidUpdate() {
	// 	this.togglePageOverflow();
	// }

	public render() {
		return (
			<div className={`modal ${this.props.hidden ? '': 'modal--active'}`} aria-hidden={this.props.hidden} ref={this.props.modalRef}>
				<div className="modal__content">
					{this.props.children}

					<button className="modal__close-button button" onClick={this.props.toggleModalVisibility}>Close</button>
				</div>
			</div>
		)
	}

	// private togglePageOverflow() {
	// 	const body = this.modalRef.current.closest('html');

	// 	console.log(this.props.hidden)

	// 	if (body instanceof HTMLElement) {
	// 		if (!this.props.hidden) {
	// 			body.classList.add('overflow-hidden');
	// 		}
	// 	}
	// }
}