import React from 'react'
import {Card} from 'antd'
const PodcastDisplay = props => {
    return (
       <Card style={{width: 425}}>
           <p>{props.podcast1}</p>
           <p>{props.speaker}</p>
           <p>{props.podcast2}</p>
        </Card>
    )
}

export default PodcastDisplay