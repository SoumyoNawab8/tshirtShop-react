import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './store';
import 'antd/dist/antd.css'
import Routes from './router';
import { BrowserRouter} from "react-router-dom";




ReactDOM.render(<BrowserRouter><Provider store={store}><Routes/></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
