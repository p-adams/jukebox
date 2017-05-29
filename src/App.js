import React, { Component } from 'react';
import Keypad from './Keypad'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
            leftPlaylist: [
                {pc1: "#A", s: "john smith", pc2: "#B"},
                {pc1: "#C", s: "mary smith", pc2: "#D"},
                {pc1: "#E", s: "dan lee", pc2: "#F"},
            ],
            rightPlaylist: [
                {pc1: "#G", s: "david morgan", pc2: "#H"},
                {pc1: "#I", s: "stanley hudson", pc2: "#J"},
                {pc1: "#K", s: "stan ford", pc2: "#L"},
            ]
        }
  }
  render() {
    return (
          <div>
            <LeftPane playlist={this.state.leftPlaylist}/>
            <Keypad/>
            <RightPane playlist={this.state.rightPlaylist}/>
          </div>
    );
  }
}

export default App;
