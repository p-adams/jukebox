import React from 'react'
import {Row, Col} from 'antd'
import {Card} from 'antd'
const Player = props => {
    return(
        <div style={{border: '1px solid blue'}}>
            <Row>
                <Col span={9}></Col>
                <Col span={6}>
                    <Card title="Podcast player" style={{width: 300}}>
                        <p>Speaker</p>
                        <p>Duration</p>
                        <p>URL</p>
                    </Card>
                </Col>
                <Col span={9}></Col>
            </Row>
        </div>
    )
}

export default Player