import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './components/Home';
import Sealing from './components/Sealing';
import SealingInfo from './components/Sealing-info';
import Reception from './components/Reception';
import Rsvp from './components/Rsvp';
import ButtonToggle from './templates/ButtonToggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        	<Home />
        	<Sealing />
        	<SealingInfo />
        </div>
        <ButtonToggle />
      </div>
    );
  }
}

export default App;
