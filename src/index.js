import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import Routers from "./router";
import 'antd/dist/antd.css';
// import Test from "./views/Test";

ReactDOM.render(
    <BrowserRouter>
        <Routers />
    </BrowserRouter>,
    document.getElementById('root'));

// ReactDOM.render(
//     <Test/>,
//     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
