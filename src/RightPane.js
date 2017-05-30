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
                            podcast2={i.podcast2}
                    />
        })
    }
    return (
        <div style={{background: '#ECECEC', padding: '30px'}}>
            <Row>
                <Col style={{marginLeft: '15%' }} md={8}>
                    {renderPlaylist()}
                </Col>
            </Row>
        </div>
    )
}


export default RightPane