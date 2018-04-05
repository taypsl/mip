import React, { Component } from 'react';

const TitleText = (props) => {
	return (
		<div className="Section-text-wrapper">
			<div className="Section-text">	
				<h1>{props.h1}</h1>
				<h3>{props.h3}</h3>
			</div>
		</div>
	)
}

export default TitleText;