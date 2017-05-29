import React from 'react'
import {Row, Col} from 'antd'
import Playlist from './Playlist'
const LeftPane = props => {
    const renderPlaylist = function() {
        return props.playlist.map((i, index) => {
            return <Playlist
                            key={index}
                            pc1={i.pc1}
                            s={i.s}
                            pc2={i.pc2}/>
        })
    }
    return (
        <Row>
            <Col md={6}>
                {renderPlaylist()}
            </Col>
        </Row>
    )
}


export default LeftPane