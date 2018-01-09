import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Sign from './SignUp'
import fire from './Firebase'




const style1 = {
    width: 500,
    margin: 10


};

class Home extends Component {
    constructor(props) {
        super(props);


    }




    componentDidMount() {
        console.log('compponet did mount');

    }

    logOut = () => {

        localStorage.clear();

        this.props.history.replace('/');
    }



    render() {



        let userCurrentData = JSON.parse(localStorage.getItem('user'));
        let uName = userCurrentData.userInfo.user;
        console.log(uName);

        return (
            <MuiThemeProvider>

                <div className="App">
                    <AppBar
                        title="CRIME REPORT APP"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <h1 className='App-title'>Welcome {uName}</h1>
                    <div>
                        <RaisedButton label="Crime Report" onClick={() => {
                            this.props.history.replace('/home/crime-report');
                        }} primary={true} style={style1} />

                        <RaisedButton label="Missing Person" onClick={() => {
                            this.props.history.replace('/home/missing-person');
                        }} primary={true} style={style1} />

                        <RaisedButton label="Complain" onClick={() => {
                            this.props.history.replace('/home/complain');
                        }} primary={true} style={style1} />

                        <RaisedButton label="All Posts" onClick={() => {
                            this.props.history.push('/all-posts');
                        }} primary={true} style={style1} />




                    </div>
                    <div className='log-out'>
                        <RaisedButton label="Logout" onClick={this.logOut} primary={true} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Home;

