import React from "react";
import styles from "../../css/issuesList.css";

class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage(){
        sendButtonClickHandler();
    }
    render() {
        return (
            <div>
                <div className="issues-list-div">
                    <ul id="list-ui">
                    {/*there will be appended content from requests.js*/}
                    </ul>
                </div>
                <div className="issues-comments-div">
                    <ul id="comments-list-ui">
                        {/*there will be appended content from requests.js*/}
                    </ul>
                    <div className="send-message-div">
                        <input id="send-message-input" type="text" placeholder="Enter comment message"/>
                        <button onClick={this.sendMessage} id="send-message-button">Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatComponent;