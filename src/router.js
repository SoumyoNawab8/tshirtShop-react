import React, { Component } from 'react'
import { Route } from "react-router-dom";
import App from './App';
import Login from './auths/login';
import product_lists from './product_lists';


export default class Routes extends Component {
  render() {
    return (
      <div>
          <Route exact path='/' component={App} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/category/:name' component={product_lists} />
      </div>
    )
  }
}
