import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	public render() {
		return (
			<form className="form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="contact" hidden />
				<label className="form__label" htmlFor="bot-field" hidden>Don’t fill this out if you're human:</label>
				<input type="hidden" name="bot-field" id="bot-field" hidden/>

				<div className="form__group">
					<label className="u-hidden" htmlFor="name">Your Name</label>
					<input id="name" className="form__input input" type="text" name="name" placeholder="Name" required/>
				</div>
				<div className="form__group">
					<label className="u-hidden" htmlFor="email">Your Email</label>
					<input id="email" className="form__input input" type="email" name="email" placeholder="Email" required/>
				</div>
				<div className="form__group">
					<label className="u-hidden" htmlFor="message">Message</label>
					<textarea id="message" className="textarea" name="message" placeholder="Message" required></textarea>
				</div>
				<div className="form__group">
					<button className="button button--dark" type="submit">Send</button>
				</div>
			</form>
		)
	}
}