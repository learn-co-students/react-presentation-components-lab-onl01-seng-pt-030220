// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {

    constructor(){
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleMood = () => {
        if (this.state.mood === 'happy') {
            this.setState({mood: 'sad'})   
        } else {
            this.setState({mood: 'happy'})
        }
    }
    
    render() {
        return (
            <div onClick={this.handleMood}>
                {this.state.mood}
            </div>
        )
    }
}
