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
        return (
            <div style={{marginTop: '25%'}}>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large" onClick={() => this.handlePlaylistSelection('A')}>A</Button>
                    <Button size="large" onClick={() => this.handlePlaylistSelection(1)}>1</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large" onClick={() => this.handlePlaylistSelection('B')}>B</Button>
                    <Button size="large" onClick={() => this.handlePlaylistSelection(2)}>2</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large" onClick={() => this.handlePlaylistSelection('C')}>C</Button>
                    <Button size="large" onClick={() => this.handlePlaylistSelection(3)}>3</Button>
                </ButtonGroup>
                </Row>
                <Row type="flex" justify="center">
                <ButtonGroup>
                    <Button size="large" onClick={() => this.handlePlaylistSelection('D')}>D</Button>
                    <Button size="large" onClick={() => this.handlePlaylistSelection(4)}>4</Button>
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