
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';

class Home extends Component{


    render(){

        return(
        <div>
            <h1> Hello world</h1>
        </div>
        );
    }
}

export default Home;