import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import fire from './Firebase';
import './App.css';




const style1 = {
  width: 500,
  margin: 10,

};



class Sign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      pass: "",
      userID: ''

    }
  }

  signUp = () => {

    let customState = this.state;

    fire.auth().createUserWithEmailAndPassword(customState.email, customState.pass)
      .then((user) => {

        // console.log(user.uid,'empty');
        // this.setState({ userID: user.uid });

        customState.userID = user.uid;
        fire.database().ref('users/' + user.uid + '/userInfo').set(customState)
          // .once('value', (snapshot) => {
          //   let userData = snapshot.val()
          //   console.log(userData);
          // })

          .then(() => {
            console.log('Great Job Signup')
            console.log(this.state.userID, 'user ID');
          })


        //router v4
        // this.props.history.push or(repalce)
        this.props.history.replace('/login');

        // browserHistory.push("/home");
        console.log("successfully signup");
      })
      .catch((error) => {
        alert(error.message);
        // console.log(error);
      })
  }

  login = () => {
    // browserHistory.push("/login")
    this.props.history.replace('/');


  }

  valueGet = (inputFld, ev) => {
    let obj = {}
    obj[inputFld] = ev.target.value;
    this.setState(obj)

  }

  render() {
    return (
      <MuiThemeProvider>

        <div className="App">
          <AppBar
            title="CRIME REPORT APP"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <h1 className='App-title'>SignUp</h1>
          <div>
            <TextField
              hintText="Enter Name" onChange={(ev) => { this.valueGet("user", ev) }}
              floatingLabelText="Name"
              style={style1}
            /><br />

            <TextField
              hintText="Enter Email" onChange={(ev) => { this.valueGet("email", ev) }}
              floatingLabelText="Email " type='email'
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

            <RaisedButton label="CREATE ACCOUNT" onClick={this.signUp} primary={true} style={style1} />
            <br />
            <RaisedButton label="LOG IN" onClick={this.login} primary={true} style={style1} />




          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Sign;

