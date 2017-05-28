import React, { Component } from 'react';
import Keypad from './Keypad'
import {Card} from 'material-ui/Card'
import './App.css';

class App extends Component {
  render() {
    return (
          <Card>
            <Keypad/>
            <Keypad/>
          </Card>
    );
  }
}

export default App;
