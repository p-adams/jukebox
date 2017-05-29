import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import Player from './Player'
import {Row, Col} from 'antd'


class App extends Component {
  constructor() {
    super()
    this.state = {
            leftPlaylist: [
                {podcast1: "#A", speaker: "john smith", podcast2: "#B"},
                {podcast1: "#C", speaker: "mary smith", podcast2: "#D"},
                {podcast1: "#E", speaker: "dan lee", podcast2: "#F"},
            ],
            rightPlaylist: [
                {podcast1: "#G", speaker: "david morgan", podcast2: "#H"},
                {podcast1: "#I", speaker: "stanley hudson", podcast2: "#J"},
                {podcast1: "#K", speaker: "stan ford", podcast2: "#L"},
            ]
        }
  }
  render() {
    return (
          <div>
            <Row>
              <Col span={12}><Player/></Col>
            </Row>
            <Row>
              <Col span={8}><LeftPane playlist={this.state.leftPlaylist}/></Col>
              <Col span={8}><Keypad/></Col>
              <Col span={8}><RightPane playlist={this.state.rightPlaylist}/></Col>
            </Row>
          </div>
    );
  }
}

export default App;
