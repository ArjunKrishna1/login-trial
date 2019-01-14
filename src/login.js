import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios';
import UploadScreen from './UploadScreen'

import Card from 'material-ui/Card'
import './App.css'


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    
    handleClick(event){
        var apiBaseUrl = "http://localhost:3000/api/";
        var self = this;
        var payload={
            "email" : this.state.username,
            "password" : this.state.password
        }
        axios.post(apiBaseUrl+'login',payload)
         .then(function (responce){
             console.log(responce);
             if(responce.data.code === 200){
             console.log("login successfull");
             var uploadScreen = [];
             uploadScreen.push(<UploadScreen appContext = {self.props.appContent}/>)
             self.props.appContent.setState({loginPage:[], uploadScreen:uploadScreen})
         }
         else if(responce.data.code === 204){
             console.log("username password do not match");
             alert("username password do not match")
         }
         else{
             console.log("username does not exist");
             alert("username does not exist");
         }}
         )
         .catch(function(error) {
             console.log(error)
         });
         
    }

    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login"/>
                        <Card className="card">
                        <TextField hintText="Enter Username" floatingLabelText="Username" 
                            onChange= {(event, newValue) => this.setState({username:newValue})}/>
                        <br/>
                        <TextField type="password" hintText="Enter Password" floatingLabelText="Password" 
                            onChange= {(event, newValue) => this.setState({password:newValue})}/>   
                        <br/>
                        <RaisedButton className="RaisedButton" label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
                        </Card>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}




export default Login;