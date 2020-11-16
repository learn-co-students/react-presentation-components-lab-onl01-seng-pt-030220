// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super()

        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        let currentMood = this.state.mood
        (currentMood === "happy") ? currentMood = "sad" : currentMood = "happy"
        this.setState({ mood: currentMood })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}