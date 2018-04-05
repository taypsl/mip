import React, { Component } from 'react';
import TitleText from '../templates/TitleText';
import MapContainer from '../templates/MapContainer';

const style = {
	  width: '100%',
	  height: '40%'
	}


const	latLng = {
	lat: 34.051439,
	lng: -118.433124
}

export default class SealingInfo extends Component {
	constructor() {
		super()

	}
	render() {
		return (
			<div className="Sealing-info section static">
				<div className="Section-text-wrapper">
					<div className="Section-text">
						<p>Marilyn and Kip will be sealed for time and all eternity at the <a href="" target="_blank">Los Angeles Temple</a></p>
						<h2>Friday, June 29th</h2>
					</div>
				</div>
					
						<div className="Sealing-questions">
							<p>What is a temple sealing?</p>
							<p>Who can go inside?</p>
							<p>Getting to the temple</p>
						</div>
										
				<MapContainer 
					style={style}
					initialCenter={latLng}
					zoom={15}
					markerName="Los Angeles Temple"
					infoWindowContent="10777 Santa Monica Blvd, Los Angeles, CA 90025"
					/>

			</div>
		)
	}
}