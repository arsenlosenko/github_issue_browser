import React from "react";
import styles from "../../css/searchRepository.css";
import ChatComponent from "./chat";
let repoUrl;

class SearchComponent extends React.Component{

    constructor(props) {
        super(props);
        this.focusURLInput = this.focusURLInput.bind(this);
        this.handleURLChange = this.handleURLChange.bind(this);
    }
    handleURLChange(evt){
        this.repoURL = evt.target.value;
    }
    //search button handler
    focusURLInput() {
        console.log(this.repoURL);
        repoUrl = this.repoURL;
        getRepositoryInfo(repoUrl);
    }
    render() {
        return (
            <div>
                <div id='search-div'>
                    <input type="text" placeholder="Enter repository URL" onChange={this.handleURLChange} required/>
                    <button onClick={this.focusURLInput}>Search</button>
                </div>
                <div id='chat-component'>
                    <ChatComponent/>
                </div>
            </div>
        );
    }
};

export default SearchComponent;