import React, {Component} from 'react'
import {Button, Icon} from 'antd'
import {Row, Col} from 'antd'
const ButtonGroup = Button.Group
class Keypad extends Component {
    render() {
        return (
            <div>
                <Row>
                <ButtonGroup>
                    <Button>A</Button>
                    <Button>1</Button>
                </ButtonGroup>
                </Row>
                <Row>
                <ButtonGroup>
                    <Button>B</Button>
                    <Button>2</Button>
                </ButtonGroup>
                </Row>
                <Row>
                <ButtonGroup>
                    <Button>C</Button>
                    <Button>3</Button>
                </ButtonGroup>
                </Row>
                <Row>
                <ButtonGroup>
                    <Button>D</Button>
                    <Button>4</Button>
                </ButtonGroup>
                </Row>
                <Row>
                <ButtonGroup>
                <Button>
                    <Icon type="pause-circle" />Pause
                </Button>
                <Button>
                    Play<Icon type="play-circle" />
                </Button>
                </ButtonGroup>
                </Row>
            </div>
        )   
    }
}

export default Keypad