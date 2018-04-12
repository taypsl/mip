import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './components/Home';
import Sealing from './components/Sealing';
import SealingInfo from './components/Sealing-info';
import Reception from './components/Reception';
import ReceptionInfo from './components/Reception-info';
import Rsvp from './components/Rsvp';
import ButtonToggle from './templates/ButtonToggle';
import Space from './components/Space';
import MapContainer from './templates/MapContainer';

class App extends Component {
  render() {

    const pasMapLtLn = {
      lat: 34.147894,
      lng: -118.143857
    }

    const pasMapStyle = {
        width: '100%',
        height: '60%'
      }

    const pasMapMarker = "Pasadena City Hall"
    const pasMapInfoWindow = "100 Garfield Ave, Pasadena, CA 91101" 


    return (
      <div className="App">
        <div className="container">
        	<Home />
        	<Reception />
        	<ReceptionInfo />
          <MapContainer 
            style={pasMapStyle}
            initialCenter={pasMapLtLn}
            zoom={15}
            markerName={pasMapMarker}
            infoWindowContent={pasMapInfoWindow}
            />
          <Space />
          <Sealing />
          <SealingInfo />
        </div>
        <ButtonToggle />
      </div>
    );
  }
}

export default App;
