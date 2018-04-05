import React, { Component } from 'react';
import TitleText from '../templates/TitleText';

export default class Home extends Component {
	render() {
		return (
			<div className="Home section static ">
				<TitleText h1="Marilyn + Kip" h3="June 2018" />
			</div>
		)
	}
}