import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	public render() {
		return (
			<form className="form" name="contact" method="POST" data-netlify="true">
				<div className="form__group">
					<label className="u-hidden">Your Name</label>
					<input className="form__input input" type="text" name="name" placeholder="Your name" required/>
				</div>
				<div className="form__group">
					<label className="u-hidden">Your Email</label>
					<input className="form__input input" type="email" name="email" placeholder="Your email" required/>
				</div>
				<div className="form__group">
					<label className="u-hidden">Message</label>
					<textarea className="textarea" name="message" placeholder="Message" required></textarea>
				</div>
				<div className="form__group">
					<button className="button button--dark" type="submit">Send</button>
				</div>
			</form>
		)
	}
}