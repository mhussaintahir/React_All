import React, { Component } from 'react';


export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString()
        }
        this.updateState();
    }

    updateState() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 1000)
    }

    render() {
        return (
            <div>{this.state.currentTime}</div>
        )
    }
}



export default Clock;