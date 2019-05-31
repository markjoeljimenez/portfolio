import React from 'react';
import Modal from '../modal';
import Form from '../form';

interface IContactPanelState {
	hidden: boolean;
}

export default class ContactPanel extends React.Component<{}, IContactPanelState> {
	private modalRef;

	constructor(props) {
		super(props);

		this.modalRef = React.createRef();

		this.state = {
			hidden: true
		}
	}

	public toggleModalVisibility() {
		this.setState({
			hidden: !this.state.hidden
		}, () => {
			const body = this.modalRef.current.closest('html');

			if (body instanceof HTMLElement) {
				if (!this.state.hidden) {
					body.classList.add('overflow-hidden');
				} else {
					body.classList.remove('overflow-hidden');
				}
			}
		});
	}

	public render() {
		return (
			<>
				<div className="hightlight-panel panel panel--dark panel--has-background-color panel--small-spacing panel--text-align-center">
					<div className="panel__container">
						<div className="row">
							<div className="column">
								<h2 className="panel__heading"><strong>Interested in working together?</strong></h2>
								<p className="panel__subheading panel__subheading--large text text--light">Send me a message and let's get started!</p>
								<button className="highlight-panel__button button" onClick={this.toggleModalVisibility.bind(this)}>Contact me</button>
							</div>
						</div>
					</div>
				</div>
				<Modal hidden={this.state.hidden} toggleModalVisibility={this.toggleModalVisibility.bind(this)} modalRef={this.modalRef}>
					<Form />
				</Modal>
			</>
		)
	}
}