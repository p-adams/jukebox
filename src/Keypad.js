import React, {Component} from 'react'
import {Button, Icon} from 'antd'
import {Row} from 'antd'
const ButtonGroup = Button.Group
class Keypad extends Component {
    constructor() {
        super()
        this.handlePlaylistSelection = this.handlePlaylistSelection.bind(this)
    }
    handlePlaylistSelection(sel) {
        console.log(`selected: ${sel}`)
    }
    render() {
        let handleLetter = this.props.onHandleLetterSel
        let handleNumber = this.props.onHandleNumberSel
        return (
            <div style={{marginTop: '25%'}}>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large" onClick={() => handleLetter('A')}>A</Button>
                    <Button size="large" onClick={() => handleNumber(1)}>1</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large" onClick={() => handleLetter('B')}>B</Button>
                    <Button size="large" onClick={() => handleNumber(2)}>2</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large" onClick={() => handleLetter('C')}>C</Button>
                    <Button size="large" onClick={() => handleNumber(3)}>3</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large" onClick={() => handleLetter('D')}>D</Button>
                    <Button size="large" onClick={() => handleNumber(4)}>4</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                <Button size="large">
                    <Icon type="pause-circle" />Pause
                </Button>
                <Button size="large" onClick={this.props.onHandleSel}>
                    Play<Icon type="play-circle" />
                </Button>
                </ButtonGroup>
                </Row>
            </div>
        )   
    }
}

export default Keypad