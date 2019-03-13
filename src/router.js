import React, { Component } from 'react'
import { Route } from "react-router-dom";
import App from './App';
import Login from './auths/login';


export default class Routes extends Component {
  render() {
    return (
      <div>
          <Route exact path='/' component={App} />
          <Route exact path='/login' component={Login} />
      </div>
    )
  }
}
