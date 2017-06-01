import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import Player from './Player'
import {Row, Col} from 'antd'
import {Layout} from 'antd'

import A1 from './playlist/value_of_values.mp3'
import A2 from './playlist/simplicity_matters.mp3'
import B1 from './playlist/phoenix_framework.mp3'
import B2 from './playlist/evening_at_erlang.mp3'
import C1 from './playlist/the_redux_journey.mp3'
import C2 from './playlist/hot_reloading.mp3'
import D1 from './playlist/state_of_vue.mp3'
import D2 from './playlist/the_progressive_web_framework.mp3'
import A3 from './playlist/c++_today.mp3'
import A4 from './playlist/why_I_created_c++.mp3'
import B3 from './playlist/power_of_simplicity.mp3'
import B4 from './playlist/programming_languages.mp3'
import C3 from './playlist/the_mess_we_are_in.mp3'
import C4 from './playlist/reactive_systems.mp3'
import D3 from './playlist/on_the_spectrum_of_abstraction.mp3'
import D4 from './playlist/meta_languages.mp3'




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
                {podcast1: "A1", podcast2: "A2", speaker: "Rich Hickey", title1: "Value of Values", title2: "Simplicity Matters", src1: A1, src2: A2},
                {podcast1: "B1", podcast2: "B2", speaker: "Jose Valim", title1: "Phoenix Framework", title2: "Evening at Erlang", src1: B1, src2: B2},
                {podcast1: "C1", podcast2: "C2", speaker: "Dan Abramov", title1: "Redux Journey", title2: "Hot Reloading", src1: C1, src2: C2},
                {podcast1: "D1", podcast2: "D2", speaker: "Evan You", title1: "State of Vue", title2: "Progressive Web Framework", src1: D1, src2: D2},
            ],
            rightPlaylist: [
                {podcast1: "A3", podcast2: "A4", speaker: "Bjarne Stroustrup", title1: "C++ Today", title2: "Why I created C++", src1: A3, src2: A4},
                {podcast1: "B3", podcast2: "B4", speaker: "Alan Kay", title1: "Power of Simplicity", title2: "Programming Languages", src1: B3, src2: B4},
                {podcast1: "C3", podcast2: "C4", speaker: "Joe Armstrong", title1: "The Mess We Are In", title2: "Reactive Systems", src1: C3, src2: C4},
                {podcast1: "D3", podcast2: "D4", speaker: "Cheng Lou", title1: "Spectrum of Abstraction", title2: "Meta Languages", src1: D3, src2: D4},
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
        this.setState({src1: el.src1, speaker: el.speaker, track: el.title1})
      }
    })
    pl.forEach(el => {
      if(sel === el.podcast2) {
        this.setState({src2: el.src2, speaker: el.speaker, track: el.title2})
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
