import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement(){
        this.setState
        
        
        
        
        ({
            counter: this.state.counter -1
        })
    }
    render() {
        return (
            <div>Counter: <CounterDisplay counterValue={this.state.counter} clickHandler={this.increment} decHandler={this.decrement} /> </div>
        )
    }
}



export default Counter;