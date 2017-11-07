import React from "react";
import "../../css/issuesList.css";
import units from "../utilities/main.js";

class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage(){
        units.sendButtonClickHandler();
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
                    <div className="section">
                        <div className="send-message-div field has-addons">
                            <p className="control">
                                <input id="send-message-input" className="input is-primary" type="text" placeholder="Enter comment message"/>
                            </p>
                            <p className="control">
                                <button className="button is-primary is-outlined" onClick={this.sendMessage} id="send-message-button">Send</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatComponent;