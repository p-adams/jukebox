import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import Player from './Player'
import {Row, Col} from 'antd'
import {Layout} from 'antd'
const {Header, Content, Footer} = Layout


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
            <Layout>
              <Header style={{width: '100%'}}>
                <h1 style={{color: 'white'}}>jukebox</h1>
              </Header>
              <Content style={{border: '3px solid purple'}}>
              <Row>
                <Col span={8}><LeftPane playlist={this.state.leftPlaylist}/></Col>
                <Col span={8}><Keypad/></Col>
                <Col span={8}><RightPane playlist={this.state.rightPlaylist}/></Col>
              </Row>
              </Content>
              <Footer>
                <Row type="flex" justify="center">
                  <Col span={24}>
                    <Player/>
                  </Col>
                </Row>
              </Footer>
            </Layout>
          </div>
    );
  }
}

export default App;
