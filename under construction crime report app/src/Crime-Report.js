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



class CrimeReports extends Component {
    constructor(props) {
        super(props);
        this.state = {

            culpritName: '',
            crimeType: '',
            victimName: '',
            time: '',
            location: '',
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

    inform = () => {
        let personsState = this.state;

        let userCurrentData = JSON.parse(localStorage.getItem('user'));
        let uId = userCurrentData.userInfo.userID;

        //  let uId = user.userID;
        console.log(uId, 'id');

        fire.database().ref('users/' + uId).child('Crime Reports/' + uId).push(personsState)
            .then(() => {
                alert('CRIME REPORTED SUCCESS FULLY')

                let currentPerson = {

                    culpritName: '',
                    crimeType: '',
                    time: '',
                    location: '',
                    victimName: ''
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

                    <h1 className='App-title'>Crime Report</h1>
                    <br />

                    {/* <Form onSubmit={} > */}
                    <TextField
                        hintText="Enter Culprit Name" value={this.state.culpritName} onChange={(ev) => { this.valueGet("culpritName", ev) }}
                        floatingLabelText="Culprit's Name" type='text'
                        style={style1}
                    /><br />

                    <TextField
                        hintText="Enter Crime Type" value={this.state.crimeType} onChange={(ev) => { this.valueGet("crimeType", ev) }}
                        floatingLabelText="Crime Type" type='text'
                        style={style1}
                    /><br />

                    <TextField
                        hintText="Enter Victim Name" value={this.state.victimName} onChange={(ev) => { this.valueGet("victimName", ev) }}
                        floatingLabelText="Victim's Name"
                        type="text"
                        style={style1}
                    /><br />

                    <TextField
                        hintText="Enter Time When Crime Committed" value={this.state.time} onChange={(ev) => { this.valueGet("time", ev) }}
                        floatingLabelText="Time"
                        type="text"
                        style={style1}
                    /><br />
                    <TextField
                        hintText="Enter Location" value={this.state.location} onChange={(ev) => { this.valueGet("location", ev) }}
                        floatingLabelText="Location"
                        type="text"
                        style={style1}
                    /><br />
                    <RaisedButton label="REPORT" onClick={this.inform} primary={true} style={style1} />

                    {/* </Form> */}

                </div>
            </MuiThemeProvider>
        );
    }
}

export default CrimeReports;

