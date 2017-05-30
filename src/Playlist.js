import React from 'react'
import {Card} from 'antd'
import {Row, Col} from 'antd'
const PodcastDisplay = props => {
    return (
       <Card style={{padding: '10px', marginBottom: '5px', width: 300}}>
           <Row>
            <Col><p>{props.podcast1}: {props.title1} </p></Col>
           </Row>
           <Row>
               <p>{props.speaker}</p>
           </Row>
           <Row>
            <Col><p>{props.podcast2}: {props.title2}</p></Col>
           </Row>
        </Card>
    )
}

export default PodcastDisplay