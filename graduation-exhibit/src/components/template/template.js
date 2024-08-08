import React from 'react';
import './template.scss';

const Template = ({ children }) => {
	return (
		<div className="template-wrap">
			<div className="body">{children}</div>
		</div>
	);
};

export default Template;
