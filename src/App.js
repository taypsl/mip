import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ButtonToggle from './containers/ButtonToggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <ButtonToggle />
      </div>
    );
  }
}

export default App;
