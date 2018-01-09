import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import fire from './Firebase';

import './App.css';





const style1 = {
    width: 500,
    margin: 10


};



class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: ""

        }
    }
    login = () => {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
            .then((user) => {
                this.props.history.replace('/home');
                console.log('Login Successful');

            })
            .catch((error) => {
                alert('Login Failed. Re-enter you Email and Password')
                console.log(error, 'login failed');
            })

    }

    signup = () => {
        // browserHistory.push("/login")
        this.props.history.replace('/signup');


    }
    valueGet = (inputFld, ev) => {
        let obj = {}
        obj[inputFld] = ev.target.value;
        this.setState(obj)
        // console.log(this.state.email);
        // console.log(this.state.pass);

    }

    render() {
        return (
            <MuiThemeProvider>

                <div className="App">
                    <AppBar
                        title="CRIME REPORT APP"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <h1 className='App-title'>Login</h1>
                    <div>

                        <TextField
                            hintText="email" onChange={(ev) => { this.valueGet("email", ev) }}
                            floatingLabelText="Email Address " type='email'
                            style={style1}
                        /><br />

                        <TextField
                            hintText="" onChange={(ev) => { this.valueGet("pass", ev) }}
                            floatingLabelText="Password"
                            type="password"
                            style={style1}
                        /><br />

                        <br />
                        <br />

                        <RaisedButton label="Login" onClick={this.login} primary={true} style={style1} />
                        <br />
                        <RaisedButton label="Sign Up" onClick={this.signup} primary={true} style={style1} />



                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Log;

