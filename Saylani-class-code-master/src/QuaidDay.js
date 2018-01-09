import React, { Component } from 'react';

export class QuaidDayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quaidDay: new Date('December 25, 2017').getTime()
        }
    }



    render() {
        let diff = this.state.quaidDay - this.props.today
        // console.log(diff / (24 * 60 * 60 * 1000));
        diff = diff / (24 * 60 * 60 * 1000)
        diff = Math.floor(diff)
        return (
            <div>Quaid Day Remaining Days: {diff}</div>
        )
    }
}



export default QuaidDayComponent;