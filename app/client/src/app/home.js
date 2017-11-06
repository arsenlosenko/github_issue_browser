import React from "react";
import styles from "./css/home.css";

class HomeComponent extends React.Component{
    render() {
        return (
            <div className="login-page">
                <div>
                    <a>Home page</a>
                </div>
            </div>
        );
    }
}

export default HomeComponent;



//still may be need!
/*constructor(props) {
        super(props);
        this.focusTextInput = this.focusTextInput.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleUsernameChange(evt){
        this.username = evt.target.value;
    }
    handlePasswordChange(evt){
        this.password = evt.target.value;
    }
    //login button handler
    focusTextInput(e) {
        e.preventDefault();
        let encodedAuth;
        try {
            encodedAuth = btoa(this.username + ':' + this.password);
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
                if(result.id){
                    console.log('Successful login');
                    window.location.href('/home');
                } else {
                    console.error('bad credentials');
                }
            })
    }*/