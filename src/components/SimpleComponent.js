// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    onClick = () => {
        this.setState({mood: "sad"})
    }
    render() {
        return (
            <div onClick={this.onClick}>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;
