import React, { Component } from 'react';
import './App.css';

import Loginscreen from './loginscreen'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContent={this}/>);
    this.setState({loginPage:loginPage})
  }

  render() {
    return (
      <div>
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;
