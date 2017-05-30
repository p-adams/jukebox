import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import Player from './Player'
import {Row, Col} from 'antd'
import {Layout} from 'antd'
import wolf from './playlist/wolf.mp3'
const {Header, Content, Footer} = Layout


class App extends Component {
  constructor() {
    super()
    this.handlePlay = this.handlePlay.bind(this)
    this.handleLetterSelection = this.handleLetterSelection.bind(this)
    this.handleNumberSelection = this.handleNumberSelection.bind(this)
    this.state = {
            leftPlaylist: [
                {podcast1: "A1", speaker: "john smith", podcast2: "A2", title1: "foo", title2: "bar", src1: "/.mp3", src2: "/.mp3"},
                {podcast1: "B1", speaker: "mary smith", podcast2: "B2", title1: "foo", title2: "bar", src1: "/.mp3", src2: "/.mp3"},
                {podcast1: "C1", speaker: "dan lee", podcast2: "C2", title1: "foo", title2: "bar", src1: "/.mp3", src2: "/.mp3"},
                {podcast1: "D1", speaker: "dan lee", podcast2: "D2", title1: "foo", title2: "bar", src1: "/.mp3", src2: "/.mp3"},
            ],
            rightPlaylist: [
                {podcast1: "A3", speaker: "david morgan", podcast2: "A4", title1: "foo", title2: "bar", src1: "/.mp3", src2: "/.mp3"},
                {podcast1: "B3", speaker: "stanley hudson", podcast2: "B4", title1: "foo", title2: "bar", src1: "/.mp3", src2: "/.mp3"},
                {podcast1: "C3", speaker: "stan ford", podcast2: "C4", title1: "foo", title2: "bar", src1: "/.mp3", src2: "/.mp3"},
                {podcast1: "D3", speaker: "dan lee", podcast2: "D4", title1: "foo", title2: "bar", src1: "/.mp3", src2: "/.mp3"},
            ],
            podcast: '',
            letter: '',
            number: 0
        }
  }
  componentDidMount() {
    console.log(this.getAudio)
    this.setState({podcast: this.getAudio})
  }
  handlePlay() {
    console.log('foo')
    this.state.podcast.play()
  }
  handleNumberSelection(n) {
    this.setState({number: n})

  }
  handleLetterSelection(l) {
    this.setState({letter: l})
  }
  handleSelection() {
    // get match = this.state.letter + this.state.number.toString()
    // map over playlist to find match
  }
  render() {
    return (
          <div>
            <audio ref={audio => this.getAudio = audio}>
              <source src={wolf}></source>
            </audio>
            <button onClick={this.handlePlay}>test play</button>
            <Layout className="layout">
              <Header style={{width: '100%'}}>
                <h1 style={{color: 'white'}}>jukebox</h1>
              </Header>
              <Content style={{width: '100%'}}>
              <Row>
                <Col span={8}><LeftPane playlist={this.state.leftPlaylist}/></Col>
                <Col span={8}><Keypad/></Col>
                <Col span={8}><RightPane playlist={this.state.rightPlaylist}/></Col>
              </Row>
              </Content>
              <Footer style={{backgroundColor: '#404040'}}>
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
