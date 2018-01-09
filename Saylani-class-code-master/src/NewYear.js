import React, { Component } from 'react';

export class NewYearComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newYear: new Date('January 01, 2018').getTime(),
        }

    }


    render() {
        let diff = this.state.newYear - this.props.today
        // console.log(diff / (24 * 60 * 60 * 1000));
        diff = diff / (24 * 60 * 60 * 1000)
        diff = Math.floor(diff)
        return (
            <div>New Year Remaining Days: {diff} </div>
        )
    }
}



export default NewYearComponent;