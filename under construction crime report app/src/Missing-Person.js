import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import fire from 'firebase';




const style1 = {
    width: 500,
    margin: 10


};



class MissingPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: '',
            age: '',
            address: '',
            lastLocation: ''
        }
    }


    logOut = () => {

        this.props.history.replace('/login');
    }

    valueGet = (inputFld, ev) => {
        let obj = {}
        obj[inputFld] = ev.target.value;
        this.setState(obj)

        // console.log(this.state.person);
        // console.log(this.state.age);
        // console.log(this.state.lastLocation);

    }

    register = () => {
        let personsState = this.state;

        let userCurrentData = JSON.parse(localStorage.getItem('user'));
        let uId = userCurrentData.userInfo.userID;

        //  let uId = user.userID;
        console.log(uId, 'id');

        fire.database().ref('users/' + uId).child('Missing Persons/' + uId).push(personsState)
            .then(() => {
                alert('PERSON REGISTERED SUCCESS FULLY')

                let currentPerson = {
                    person: '',
                    age: '',
                    address: '',
                    lastLocation: ''
                };
                this.setState(currentPerson);

            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        return (
            <MuiThemeProvider>

                <div className="App">

                    <h1 className='App-title'>Missing Person</h1>
                    <br />

                    {/* <Form onSubmit={} > */}
                    <TextField
                        hintText="Enter Person Name" value={this.state.person} onChange={(ev) => { this.valueGet("person", ev) }}
                        floatingLabelText="Person Name" type='text'
                        style={style1}
                    /><br />

                    <TextField
                        hintText="Enter Person Age" value={this.state.age} onChange={(ev) => { this.valueGet("age", ev) }}
                        floatingLabelText="Age" type='text'
                        style={style1}
                    /><br />

                    <TextField
                        hintText="Enter person Address" value={this.state.address} onChange={(ev) => { this.valueGet("address", ev) }}
                        floatingLabelText="Address"
                        type="text"
                        style={style1}
                    /><br />

                    <TextField
                        hintText="Enter Location where person headed last time" value={this.state.lastLocation} onChange={(ev) => { this.valueGet("lastLocation", ev) }}
                        floatingLabelText="Last Location"
                        type="text"
                        style={style1}
                    /><br />
                    
                    <RaisedButton label="REGISTER" onClick={this.register} primary={true} style={style1} />

                    {/* </Form> */}

                </div>
            </MuiThemeProvider>
        );
    }
}

export default MissingPerson;

