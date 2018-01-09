import React, { Component } from 'react';

export class EventsLearning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'haider ali'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log('hello world', this);
        console.log(this.state.userName);

    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>

            </div>
        )
    }
}



export default EventsLearning;