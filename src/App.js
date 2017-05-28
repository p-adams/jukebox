import React, { Component } from 'react';
import Keypad from './Keypad'
import './App.css';

class App extends Component {
  render() {
    return (
          <div>
            <Keypad/>
            <Keypad/>
          </div>
    );
  }
}

export default App;
