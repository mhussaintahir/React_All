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



class Complains extends Component {
    constructor(props) {
        super(props);
        this.state = {

            recName: '',
            sendName: '',
            compDetails: '',

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

    complain = () => {
        let personsState = this.state;

        let userCurrentData = JSON.parse(localStorage.getItem('user'));
        let uId = userCurrentData.userInfo.userID;

        //  let uId = user.userID;
        console.log(uId, 'id');

        fire.database().ref('users/' + uId).child('Complains/' + uId).push(personsState)
            .then(() => {
                alert('COMPLAINED SUCCESS FULLY')

                let currentPerson = {

                    recName: '',
                    sendName: '',
                    compDetails: '',
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

                    <h1 className='App-title'>Complain</h1>
                    <br />

                    {/* <Form onSubmit={} > */}
                    <TextField
                        hintText="Enter Reciever Name" value={this.state.recName} onChange={(ev) => { this.valueGet("recName", ev) }}
                        floatingLabelText="To" type='text'
                        style={style1}
                    /><br />

                    <TextField
                        hintText="Enter Sender Name" value={this.state.sendName} onChange={(ev) => { this.valueGet("sendName", ev) }}
                        floatingLabelText="From" type='text'
                        style={style1}
                    /><br />
                    <TextField
                        hintText="Complain details whome you about to inform" value={this.state.compDetails} onChange={(ev) => { this.valueGet("compDetails", ev) }} multiLine={true} rows={2} style={style1}
                    /><br />


                    <RaisedButton label="SUBMIT" onClick={this.complain} primary={true} style={style1} />

                    {/* </Form> */}

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Complains;

