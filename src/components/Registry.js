import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Registry extends Component {
	render() {
		return (
			<div className="Registry section static">
				<div className="Registry-links">
					<div className="Registry-link"><a href="https://www.target.com/" target="_blank"><div className="Logo target"></div></a></div>
					<div className="Registry-link"><a href="https://www.crateandbarrel.com/" target="_blank"><div className="Logo cAndB"></div></a></div>
					<div className="Registry-link"><a href="https://www.amazon.com/" target="_blank"><div className="Logo amazon"></div></a></div>
					<div className="Registry-link"><a href="https://www.givedirectly.org/" target="_blank"><div className="Logo giveDirectly"></div></a></div>
				</div>
				<div className="Charitable-text">
					<p>Additionally, we ask that you consider making a contribution to <a href="https://www.givedirectly.org/" target="_blank">givedirectly.org</a> in Kip and Marilyn's name. <a href="https://www.givedirectly.org/" target="_blank">GiveDirectly</a> gives money worldwide to people in need.</p>
				</div>
			</div>
		)
	}
}