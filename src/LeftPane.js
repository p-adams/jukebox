import React from 'react'
import {Row, Col} from 'antd'
import Playlist from './Playlist'
const LeftPane = props => {
    const renderPlaylist = function() {
        return props.playlist.map((i, index) => {
            return <Playlist
                            key={index}
                            podcast1={i.podcast1}
                            speaker={i.speaker}
                            podcast2={i.podcast2}
                            title1={i.title1}
                            title2={i.title2}
                            src1={i.src1}
                            src2={i.src2}
                    />
        })
    }
    return (
        <div style={{background: '#ECECEC', padding: '30px'}}>
            <Row>
                <Col md={6}>
                    {renderPlaylist()}
                </Col>
            </Row>
        </div>
    )
}


export default LeftPane