import React, { Component } from 'react';
import TitleText from '../templates/TitleText';

export default class ReceptionInfo extends Component {
	constructor() {
		super()

	}
	render() {
		return (
			<div className="Reception-info section static">
				<div className="Section-text-wrapper">
					<div className="Section-text">
						<h1>Saturday, June 30th 5:30pm - 8:30pm</h1>
						<p>Join Kip and Marilyn in celebrating their wedding with dinner and dancing at the historic <a href="" target="_blank">Pasadena City Hall</a>.</p>
						<p>Parking can be challenging on weeknights at this location. The map below shows nearby parking structures.</p>
					</div>
				</div>
				

			</div>
		)
	}
}