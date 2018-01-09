import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import firebase from 'firebase';


const style1 = {
  width:500,
  
  
};

class App extends Component {






  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sign Up</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}



    <AppBar
    title="SIGN UP"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
      <div> 
      <TextField
      hintText="user Name"
      floatingLabelText="Enter your Name " 
      style={style1}
    /><br />

    <TextField
      hintText="email"
      floatingLabelText="Enter your Email " type='email'
      style={style1}
    /><br />

    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
      style={style1}
    /><br />

<br />
<br />

<RaisedButton label="GO" primary={true} style={style1}  />


          </div>
      </div>
    );
  }
}

export default App;
