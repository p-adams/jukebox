import React, {Component} from 'react'
import {Row, Col} from 'antd'
import Playlist from './Playlist'
class LeftPane extends Component {
    constructor() {
        super()
        this.state = {
            playlist: [
                {pc1: "#A", s: "john smith", pc2: "#B"},
                {pc1: "#C", s: "mary smith", pc2: "#D"},
                {pc1: "#E", s: "dan lee", pc2: "#F"},
            ]
        }
    }
    renderPlaylist(){
        return this.state.playlist.map((i, index) => {
            return <Playlist
                            key={index}
                            pc1={i.pc1}
                            s={i.s}
                            pc2={i.pc2}/>
        })
    }
    render() {
        return (
            <Row>
                <Col md={6}>
                   {this.renderPlaylist()}
                </Col>
            </Row>
        )
    }
}

export default LeftPane