import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {Card} from 'material-ui/Card'
class Keypad extends Component {
    handleTouch() {
        alert("meow")
    }
    render() {
        return (
            <Card>
                <RaisedButton onTouchTap={this.handleTouch} label="Default"/>
            </Card>
        )   
    }
}

export default Keypad