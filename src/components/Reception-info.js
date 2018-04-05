import React, { Component } from 'react';
import TitleText from '../templates/TitleText';
import MapContainer from '../templates/MapContainer';

const style = {
	  width: '100%',
	  height: '40%'
	}


const	latLng = {
	lat: 34.147894,
	lng: -118.143857
}

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
				<MapContainer 
					style={style}
					initialCenter={latLng}
					zoom={15}
					markerName="Pasadena City Hall"
					infoWindowContent="100 Garfield Ave, Pasadena, CA 91101"
					/>

			</div>
		)
	}
}