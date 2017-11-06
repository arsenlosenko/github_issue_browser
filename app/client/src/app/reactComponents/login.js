import React from "react";
import SearchRepositoryComponent from "./searchRepository";
import styles from "../css/login.css";
import  { Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import * as ReactDOM from "react-dom";

class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.focusTextInput = this.focusTextInput.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleUsernameChange(evt){
        this._username = evt.target.value;
    }
    handlePasswordChange(evt){
        this._password = evt.target.value;
    }
    //login button handler
    focusTextInput(e) {
        e.preventDefault();
        let encodedAuth;
        try {
            encodedAuth = btoa(this._username + ':' + this._password);
        } catch (e) {
            console.log('enter latin only!');
            return;
        }
        // login request to git API
        fetch('https://api.github.com/user', {
            method: 'get',
            headers: {
                'Authorization': 'Basic ' + encodedAuth
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                console.log('login info', result);
                document.getElementById('login-div').style.display = 'none';
                document.getElementById('search-repository-component').style.display = 'block';
                if(result.id){
                    console.log('Successful login');
                } else {
                    console.error('bad credentials');
                    window.location.reload();
                }
            })
    }
    render() {
        return (
            <div>
                <div className="login-page" id="login-div">
                    <div className="form">
                        <form id="login" onSubmit={this.focusTextInput}>
                            <input type="text" placeholder="Enter Username" onChange={this.handleUsernameChange} required/>
                            <input type="password" placeholder="Enter Password" onChange={this.handlePasswordChange} required/>
                            <button type='submit'>Login</button>
                        </form></div>
                </div>
                <div id='search-repository-component'>
                    <SearchRepositoryComponent />
                </div>
            </div>
        );
    }
};

export default LoginComponent;