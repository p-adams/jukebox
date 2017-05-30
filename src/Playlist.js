import React from 'react'
import {Card} from 'antd'
import {Row, Col} from 'antd'
const PodcastDisplay = props => {
    return (
       <Card style={{padding: '10px', marginBottom: '5px', width: 300}}>
           <Row>
            <Col><p>{props.podcast1}: <a href={props.src1}>{props.title1}</a></p></Col>
           </Row>
           <Row>
               <p>{props.speaker}</p>
           </Row>
           <Row>
            <Col><p>{props.podcast2}: <a href={props.src2}>{props.title2}</a></p></Col>
           </Row>
        </Card>
    )
}

export default PodcastDisplay