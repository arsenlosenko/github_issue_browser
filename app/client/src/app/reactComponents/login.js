import React from "react";
import units from "../utilities/main";
import SearchRepositoryComponent from "./searchRepository";
//import "../../css/login.css";

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
                    units.setUsername(result.login); //set username for message send
                } else {
                    console.error('bad credentials');
                    window.location.reload();
                }
            })
    }
    render() {
        return (
//        <div className="container is-fluid">
//        <div className="tile is-parent">
//        <article className="tile is-child notification is-primary">
//
//            <div className="field">
//                <label className="label">Name</label>
//                    <div className="control">
//                        <input className="input" type="text" placeholder="e.g Alex Smith"/>
//                    </div>
//            </div>
//
//            <div className="field">
//                <label className="label">Email</label>
//                    <div className="control">
//                        <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
//                    </div>
//            </div>
//            </article>
//      </div>
//        </div>

<div>
    <section className="hero is-fullheight" id="login-div">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login (GitHub) to proceed.</p>
              <div className="box">
                <form id="login" onSubmit={this.focusTextInput}>
                  <div className="field">
                    <div className="control">
                      <input className="input is-primary" type="text" placeholder="GitHub Username" onChange={this.handleUsernameChange} required/>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-primary" type="password" placeholder="Your Password" onChange={this.handlePasswordChange} required/>
                    </div>
                  </div>
                    <button className="button is-block is-primary is-fullwidth" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
      <div id='search-repository-component'>
        <SearchRepositoryComponent />
    </div>
</div>


//              <a className="button is-block is-primary">Login</a>

//            <div>
//                <div className="login-page" id="login-div">
//                    <div className="form">
//                        <form id="login" onSubmit={this.focusTextInput}>
//                            <input type="text" placeholder="Enter Username" onChange={this.handleUsernameChange} required/>
//                            <input type="password" placeholder="Enter Password" onChange={this.handlePasswordChange} required/>
//                            <button type='submit'>Login</button>
//                        </form></div>
//                </div>
//                <div id='search-repository-component'>
//                    <SearchRepositoryComponent />
//                </div>
//            </div>
        );
    }
};

export default LoginComponent;