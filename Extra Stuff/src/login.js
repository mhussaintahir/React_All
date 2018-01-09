

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import {browserHistory} from 'react-router';
import fire from './firebase';
import Home from './home.js'

class Log extends Component{


    render(){

        return(
        <div>
            <h1>  now login </h1>
        </div>
        );
    }
}
export default Log;