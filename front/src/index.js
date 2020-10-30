import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './components/Main'
import { Provider } from "react-redux";

import store from "./store/store";

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap'

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Route path="/" component = {Main}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

