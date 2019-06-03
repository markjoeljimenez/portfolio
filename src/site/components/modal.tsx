import React from 'react';

interface IModalProps {
	children?: React.ReactNode;
	modalRef: React.Ref<any>;
	toggleModalVisibility: () => void;
	hidden: boolean;
}

export default ({ children, toggleModalVisibility, hidden, modalRef}: IModalProps) => (
	<div className={`modal ${hidden ? '': 'modal--active'}`} aria-hidden={hidden}>
		<div className="modal__content">
			{children}

			<button className="modal__close-button button" onClick={toggleModalVisibility} ref={modalRef}>Close</button>
		</div>
	</div>
)