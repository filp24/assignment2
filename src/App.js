import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import toReg from './components/auth/toReg';
import Login from './components/auth/toLogin';
import Display from './components/home/display/Display';
import './App.css';


class App extends Component {

  state = {
    auth: true,
    haveAccount: true
  }

  
  render(){
    
    const haveAccountHandler = () => {
      this.setState({haveAccount: true});
    }

    

    const reg = (
      <Fragment>
        <Route path="/signup" exact component={toReg} />
        <Redirect from="/" to="/signup" />
      </Fragment>
    );

    const login = (
      <Fragment>
        <Route path="/login" exact component={Login} />
        <Redirect from="/" to="/login" />
      </Fragment>
    );

   

  return (
    <div>
      { this.state.auth ? <Display /> : [this.state.haveAccount ? login : reg] }
    </div>
  );
  };
}

export default App;
