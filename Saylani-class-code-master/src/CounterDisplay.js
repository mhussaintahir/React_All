import React from 'react';

let CounterDisplay = function (props) {
    return(
        <div><button onClick={props.clickHandler}>Add</button>{props.counterValue} <button onClick={props.decHandler}>Less</button></div>
    )
}

export default CounterDisplay;