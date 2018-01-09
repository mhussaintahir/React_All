import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';




const style1 = {
    width: 500,
    margin: 10


};



class Home extends Component {
    constructor(props) {
        super(props);
    }


    logOut = () => {

        this.props.history.replace('/login');
    }


    render() {
        return (
            <MuiThemeProvider>

                <div className="App">
                    <AppBar
                        title="CRIME REPORT APP"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <h1 className='App-title'>Home</h1>
                    <div>
                        <RaisedButton label="Logout" onClick={this.logOut} primary={true} style={style1} />


                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Home;

