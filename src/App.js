import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import Player from './Player'
import {Row, Col} from 'antd'
import {Layout} from 'antd'
import wolf from './playlist/wolf.mp3'
import baboon from './playlist/baboon.mp3'
const {Header, Content, Footer} = Layout

class App extends Component {
  constructor() {
    super()
    this.playIt = this.playIt.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.handleLetterSelection = this.handleLetterSelection.bind(this)
    this.handleNumberSelection = this.handleNumberSelection.bind(this)
    this.state = {
            leftPlaylist: [
                {podcast1: "A1", speaker: "john smith", podcast2: "A2", title1: "foo", title2: "bar", src1: baboon, src2: wolf},
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
            playerDetails: [],
            playlistSource: '',
            letter: '',
            number: 0
        }
  }
  handleNumberSelection(n) {
    this.setState({number: n})

  }
  handleLetterSelection(l) {
    this.setState({letter: l})
  }
  playIt() {
    let playlist = document.getElementById("playlist")
    let source = document.getElementById("src")
    console.log(this.state.playlistSource)
    source.src = this.state.playlistSource
    playlist.load()
    playlist.play()
  }
  handleSelection() {
    let selectedTrack = this.state.letter + this.state.number.toString()
    let pl = this.state.leftPlaylist.concat(this.state.rightPlaylist)
    pl.forEach((el, index) => {
      if(selectedTrack === el.podcast1) {
          this.setState({playlistSource: el.src1})
          console.log(`source1: ${this.state.playlistSource}`)
      }
      if(selectedTrack === el.podcast2) {
          this.setState({playistSource: el.src2})
          console.log(`source2: ${this.state.playlistSource}`)
      }
    })
  }
  render() {
    return (
          <div>
            <button onClick={this.playIt}>play it</button>
            <audio id="playlist">
              <source id="src" type="audio/mp3"></source>
              Your browser does not support the audio format.
            </audio>
            
            <Layout className="layout">
              <Header style={{width: '100%'}}>
                <h1 style={{color: 'white'}}>jukebox</h1>
              </Header>
              <Content style={{width: '100%'}}>
              <Row>
                <Col span={8}>
                  <LeftPane playlist={this.state.leftPlaylist}
                            handleSource={this.state.source}
                  />
                </Col>
                <Col span={8}>
                  <Keypad
                    onHandleLetterSel={this.handleLetterSelection}
                    onHandleNumberSel={this.handleNumberSelection}
                    onHandleSel={this.handleSelection}
                    />
                </Col>
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
