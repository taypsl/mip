import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GOOGLE_KEY } from '../.env';

const iconUrl = require('../assets/icn-marker@2x.png');

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
 
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

 
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 
  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
 
  render() {
    return (
      <Map 
      	initialCenter={this.props.initialCenter}
    		google={this.props.google}
        onClick={this.onMapClicked}
        style={this.props.style}
        scrollwheel={false} 
        guestureHandling='cooperative'
        zoom={this.props.zoom} >

        <Marker 
        	className="Map-marker"
        	onClick={this.onMarkerClick}
          name={this.props.markerName}
          icon={{ url: iconUrl }}
          style={{width: 40, height: 40}} />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <p>{this.props.infoWindowContent}</p>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}



export default GoogleApiWrapper({
  apiKey: GOOGLE_KEY
})(MapContainer)

