import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";
// import {Router, Route} from "react-router";
import { BrowserRouter, Route } from 'react-router-dom'
import LoginComponent from "./reactComponents/login";

let App = createReactClass({
    render: function () {
        return (
            <BrowserRouter>
                <Route path={'/'} component={LoginComponent}/>
            </BrowserRouter>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('chat-wrapper'));