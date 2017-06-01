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
    this.handlePlay = this.handlePlay.bind(this)
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
            speaker: '',
            track: '',
            duration: '',
            url: '',
            file: null,
            src1: '',
            src2:'',
            hasSelected: false,
            isPlaying: false,
            letter: '',
            number: 0
        }
  }
  componentDidMount() {
    const file = new Audio()
    this.setState({file: file})
  }
  handleNumberSelection(n) {
    this.setState({number: n, isPlaying: false})
  }
  handleLetterSelection(l) {
    this.setState({letter: l, isPlaying: false})
  }
  handlePlay() {
    console.log('src1:', this.state.src1)
    console.log('src2:', this.state.src2)
    let source = this.state.src1 !== '' ? this.state.src1 :this.state.src2
    console.log (`SOURCE: ${source}`)
    let audio = this.state.file
    audio.src = source
    console.log(`audio source: ${audio.src}`)
    audio.addEventListener('loadeddata', () => {
    console.log("Playing " + audio.src + ", for: " + audio.duration + "seconds. from: " + audio.currentSrc);
    this.setState({file: audio, duration: audio.duration, url: audio.src})
    //audio.play(); 
    });
    this.state.file.load()
    this.state.file.play()
    console.log(this.state.file)
    this.setState({
      src1: '', src2: ''})
  }
  handleSelection() {
    let sel = this.state.letter + this.state.number.toString()
    let pl = this.state.leftPlaylist.concat(this.state.rightPlaylist)
    pl.forEach(el => {
      if(sel === el.podcast1) {
        this.setState({src1: el.src1, speaker: el.speaker, track: el.podcast1})
      }
    })
    pl.forEach(el => {
      if(sel === el.podcast2) {
        this.setState({src2: el.src2, speaker: el.speaker, track: el.podcast2})
      }
    })
    this.setState({hasSelected: true, isPlaying: true})
  }
  render() {
    return (
          <div>
            <Layout className="layout">
              <Header style={{width: '100%'}}>
                <h1 style={{color: 'white'}}>jukebox</h1>
              </Header>
              <Content style={{width: '100%'}}>
              <Row>
                <Col span={8}>
                  <LeftPane playlist={this.state.leftPlaylist}/>
                </Col>
                <Col span={8}>
                  <Keypad
                    onHandleLetterSel={this.handleLetterSelection}
                    onHandleNumberSel={this.handleNumberSelection}
                    onHandleSel={this.handleSelection}
                    hasSelected={this.state.hasSelected}
                    isPlaying={this.state.isPlaying}
                    onHandlePlay={this.handlePlay}
                    />
                </Col>
                <Col span={8}><RightPane playlist={this.state.rightPlaylist}/></Col>
              </Row>
              </Content>
              <Footer style={{backgroundColor: '#404040'}}>
                <Row type="flex" justify="center">
                  <Col span={24}>
                    <Player speaker={this.state.speaker}
                            track={this.state.track}
                            duration={this.state.duration}
                            url={this.state.url}
                    />
                  </Col>
                </Row>
              </Footer>
            </Layout>
          </div>
    );
  }
}

export default App;
