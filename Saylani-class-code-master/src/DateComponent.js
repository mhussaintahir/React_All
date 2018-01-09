import React, { Component } from 'react';
import QuaidDayComponent from './QuaidDay';
import NewYearComponent from './NewYear';

export class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().getTime(),
            // quaidDay:  new Date('December 25, 2017').getTime(),
            // newYear:  new Date('January 01, 2018').getTime(),
        }
        this.updateState();
    }

    updateState() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().getTime()
            });
        }, 1000)
    }

    render() {
        // console.log(this.state.currentTime)
        return (
            <div>
                <div>{this.state.currentTime}</div>
                <QuaidDayComponent today={this.state.currentTime} />
                <NewYearComponent today={this.state.currentTime} />

            </div>
        )
    }
}



export default DateComponent;