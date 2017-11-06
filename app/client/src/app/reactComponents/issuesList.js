import React from "react";
import styles from "../../css/issuesList.css";

class ChatComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="issues-list-div">
                    <ul id="list-ui">
                    {/*there will be appended content from requests.js*/}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ChatComponent;