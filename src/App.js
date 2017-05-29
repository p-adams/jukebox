import React, { Component } from 'react';
import Keypad from './Keypad'
import LeftPane from './LeftPane'
import './App.css';

class App extends Component {
  render() {
    return (
          <div>
            <LeftPane/>
          </div>
    );
  }
}

export default App;
