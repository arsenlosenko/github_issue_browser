import React from "react";
import IssuesListComponent from "./issuesList";
import units from "../utilities/main";
import "../../css/chat.css";

class ChatComponent extends React.Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        units.logout();
    }
    render() {
        return (
<div>
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Repo Name</p>
              <p className="title" id='repo-name'></p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Brunches</p>
              <p className="title" id='repo-brunches'></p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Watchers</p>
              <p className="title" id='repo-watchers'></p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Subscribers</p>
              <p className="title" id='repo-subscribers'></p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Stars</p>
              <p className="title" id='repo-stars'></p>
            </div>
          </div>
        </nav>
        <IssuesListComponent />
</div>

//            <div>
//                <div className='common-info-div'>
//                    <label>Name</label>
//                    <span id='repo-name'></span>
//                    <label>Language</label>
//                    <span id='repo-language'></span>
//                    <label>Stars</label>
//                    <span id='repo-stars'></span>
//                    <label>Owner</label>
//                    <span id='repo-owner'></span>
//                    <label>Watchers</label>
//                    <span id='repo-watchers'></span>
//                    <label>Subscribers</label>
//                    <span id='repo-subscribers'></span>
//                    <label>Brunches</label>
//                    <span id='repo-brunches'></span>
//                    <button id='logout-button' onClick={this.logout}>log Out</button>
//                </div>
//                <div className='statistic-info-div'>
//                    {/*render statistic data from python API*/}
//                </div>
//                <IssuesListComponent />
//            </div>
        );
    }
}

export default ChatComponent;