import React from 'react'
import {Card} from 'antd'
const PodcastDisplay = props => {
    return (
       <Card style={{width: 300}}>
           <p>{props.pc1}</p>
           <p>{props.s}</p>
           <p>{props.pc2}</p>
        </Card>
    )
}

export default PodcastDisplay