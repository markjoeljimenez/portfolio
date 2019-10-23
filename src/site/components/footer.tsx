import * as React from 'react';
import SocialMedia from './social-media';

export default ( { socialMedia }) => {
	return (
		<footer className="footer">
			<div className="container">
				<SocialMedia links={socialMedia}/>
			</div>
		</footer>
	)
}