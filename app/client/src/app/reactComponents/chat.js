import React from "react";
import styles from "../css/chat.css";

class ChatComponent extends React.Component{
    render() {
        return (
            <div>
                <div className="common-info-div">
                    <label>Name</label>
                    <span id='repo-name'></span>
                    <label>Branches</label>
                    <span id='repo-branches'></span>
                    <label>Language</label>
                    <span id='repo-language'></span>
                    <label>Stars</label>
                    <span id='repo-stars'></span>
                    <label>Owner</label>
                    <span id='repo-owner'></span>
                    <label>Watchers</label>
                    <span id='repo-watchers'></span>
                    <label>Subscribers</label>
                    <span id='repo-subscribers'></span>
                    <label>Brunches</label>
                    <span id='repo-brunches'></span>
                </div>
            </div>
        );
    }
}

export default ChatComponent;