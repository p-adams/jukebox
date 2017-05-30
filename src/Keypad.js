import React, {Component} from 'react'
import {Button, Icon} from 'antd'
import {Row} from 'antd'
const ButtonGroup = Button.Group
class Keypad extends Component {
    render() {
        return (
            <div style={{marginTop: '25%'}}>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large">A</Button>
                    <Button size="large">1</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large">B</Button>
                    <Button size="large">2</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large">C</Button>
                    <Button size="large">3</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large">D</Button>
                    <Button size="large">4</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                <Button size="large">
                    <Icon type="pause-circle" />Pause
                </Button>
                <Button size="large">
                    Play<Icon type="play-circle" />
                </Button>
                </ButtonGroup>
                </Row>
            </div>
        )   
    }
}

export default Keypad