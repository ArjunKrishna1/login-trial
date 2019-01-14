import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Login from './login'
import Register from './register'
import './App.css'

class Loginscreen extends Component{
    constructor(props){
    super(props);
    this.state= {
        username:'',
        password:'',
        loginscreen:[],
        loginmessage:'',
        buttonLabel: 'Register',
        isLogin:true
    }
}

componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext= {this.props.parentContext}/>);
    var loginmessage = "Not Registered yet";
    this.setState({
        loginscreen:loginscreen,
        loginmessage:loginmessage
    })
}

handleClick(event){

    console.log("event", event);
    var loginmessage;
    if(this.state.isLogin){
        var loginscreen=[];
        loginscreen.push(<Register parentContext={this}/>);
        loginmessage="Already registered";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage,
            buttonLabel:"Login",
            isLogin:false
        })
    }
    else{
        loginscreen=[];
        loginscreen.push(<Login parentContext={this}/>);
        loginmessage= "Not Registered";
        this.setState({
            
            loginscreen:loginscreen,
            loginmessage:loginmessage,
            buttonLabel:"Register",
            isLogin : true
        })
    }
}


    render(){
        return(
            <div className="loginscreen">
            {this.state.loginscreen}
            <div className="ifbutton">
            
            {this.state.loginmessage}
            <MuiThemeProvider>
                <div>
                    <RaisedButton label={this.state.buttonLabel} primary={true} onClick={(event) => this.handleClick(event)}/>
                </div>
            </MuiThemeProvider>
            </div>
            </div>
        );
    }
}



export default Loginscreen;