import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";
// import {Router, Route} from "react-router";
import { BrowserRouter, Route } from 'react-router-dom'
import LoginComponent from "./login";
import HomeComponent from "./home";

let App = createReactClass({
    render: function () {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path={'/'} component={LoginComponent}></Route>
                    <Route path={'/home'} component={HomeComponent}></Route>
                </div>
            </BrowserRouter>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('chat-wrapper'));