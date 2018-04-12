import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Registry extends Component {
	render() {
		return (
			<div className="Registry section static">
				<div className="Registry-links">
					<div className="Registry-link"><div className="Logo target"></div></div>
					<div className="Registry-link"><div className="Logo cAndB"></div></div>
					<div className="Registry-link"><div className="Logo amazon"></div></div>
					<div className="Registry-link"><div className="Logo giveDirectly"></div></div>
				</div>
				<div className="Charitable"></div>
			</div>
		)
	}
}