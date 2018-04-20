import React, { Component } from 'react';
// import logo from './logo.svg';

// import Home from './components/Home';
// import Sealing from './components/Sealing';
// import SealingInfo from './components/Sealing-info';
// import Reception from './components/Reception';
// import ReceptionInfo from './components/Reception-info';
// import Registry from './components/Registry';
// import Rsvp from './components/Rsvp';
// import ButtonToggle from './templates/ButtonToggle';
// import Space from './components/Space';
// import MapContainer from './templates/MapContainer';

import Plx from 'react-plx';
import HomeImg from './assets/img-print@2x.png';

const HomePlx = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 1,
        endValue: 0.75,
        property: "opacity"
      }
    ]
  },
  {
    start: 350,
    duration: 300,
    properties: [
      {
        startValue: 0.75,
        endValue: 0.50, //1
        property: "opacity"
      }
    ]
  },
  {
    start: 700,
    duration: 1000,
    properties: [
      {
        startValue: 0.50,
        endValue: 0, //1
        property: "opacity"
      }
    ]
  }
];

const ReceptionPlx = [
  {
    start: 1050,
    duration: 300,
    properties: [
     { 
        startValue: 0,
         endValue: 1,
         property: "opacity"
      }
    ]
  }
];

const backgroundStyle = {
  width: "100%",
  height: "100%",
  //lineHeight: "100px",
  textAlign: "center",
  // borderRadius: 20,
  // backgroundColor: "#34ba9c",
  backgroundImage:  `url(${HomeImg})`,
  //left: "50%",
  //marginLeft: -50,
  //top: -50,
  position: "fixed",
};

const fontStyle = {
  lineHeight: "100px",
  opacity: 1,
  fontFamily: "Roboto Slab, serif",
  fontWeight: 300, //300, 400, 700
  fontSize: "6rem",
  color: "#000"
}

class App extends Component {
  render() {
    return (
      <div style={{ height: 3000 }}>
        <Plx 
          className="Home-plx"
          parallaxData={HomePlx}
          style={backgroundStyle}
        > 
          <div className="fonts" >
            <h1 style={fontStyle}>Marilyn and Kip</h1>
            <h3 style={fontStyle}>June 30, 2018</h3>
          </div>
        </Plx>
        <Plx 
          className="Reception-plx"
          parallaxData={ReceptionPlx}
          style={backgroundStyle}
        >
          <h1>Reception</h1>
        </Plx>
      </div>
    )
  }
}

export default App;



/*


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
          <Registry />
        </div>
        <ButtonToggle />
      </div>
    );
*/