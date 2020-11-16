// Code SimpleComponent Here

import React, {Component} from 'react' 


export default class SimpleComponent extends Component{

    state = {
        mood: "happy"
    }


handleClick = () => {
    if(this.state.mood === "happy")
    {this.setState({
        mood:"sad"
    })} 
    else if (this.state.mood === "sad"){
        this.setState({
            mood: "Happy"
        })
    }
}

    render(){
        return(
            <div onClick={this.handleClick}> 
                {this.state.mood}
            </div>
        )
    }
}
