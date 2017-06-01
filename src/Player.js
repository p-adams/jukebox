import React from 'react'
import {Row, Col} from 'antd'
import {Card} from 'antd'
const Player = props => {
    return(
        <div>
            <Row>
                <Col span={8}></Col>
                <Col span={9}>
                    <Card title="Podcast player" style={{width: 400}}>
                        <p>Speaker: {props.speaker}</p>
                        <p>Podcast title: {props.track}</p>
                        <p>Duration: {props.duration}</p>
                        <p>URL: {props.url}</p>
                    </Card>
                </Col>
                <Col span={9}></Col>
            </Row>
        </div>
    )
}

export default Player