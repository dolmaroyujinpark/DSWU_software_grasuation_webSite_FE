import React from 'react';
import './template.scss';

const Template = ({ children }) => {
	const openPopup = () => {
		const url = './popup';
		const options = 'width=1000, height=620, top=20, left=250';
		window.open(url, 'popupName', options);
	};

	return (
		<div className="template-wrap">
			<div className="body">{children}</div>
		</div>
	);
};

export default Template;
