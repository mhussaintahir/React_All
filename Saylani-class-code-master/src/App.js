import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Child from "./ProtoType"




export class App extends Component {
  render() {
    return (
      <div>
        Hello world
        <Child text="Click me"/>
      </div>
    )
  }
}



// export default App;
