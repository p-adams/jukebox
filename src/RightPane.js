import React from 'react'
import {Row, Col} from 'antd'
import Playlist from './Playlist'
const RightPane = props => {
    const renderPlaylist = function() {
        return props.playlist.map((i, index) => {
            return <Playlist
                            key={index}
                            podcast1={i.podcast1}
                            speaker={i.speaker}
                            podcast2={i.podcast2}/>
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


export default RightPane