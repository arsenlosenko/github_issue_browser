import React from "react";
import "../../css/searchRepository.css";
import ChatComponent from "./chat";
import requests from "../utilities/requests.js";
import 'bulma/css/bulma.css'
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
        requests.getRepositoryInfo(repoUrl);
    }
    render() {
        return (
 <div>
<section className="hero is-primary is-medium">

    <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Log Out
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <a className="button is-primary is-inverted" href="https://github.com/arsenlosenko/github_issue_browser/">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div className="hero-body">
    <div className="container has-text-centered">
      <h1 className="title">
        GitHub issue browser
      </h1>
      <h2 className="subtitle">
        Дефолтний Льоха
      </h2>
    </div>
  </div>

    <div className="hero-foot">
    <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
        <div className="container">
  <ul>
    <li className=""><a href="/">Choosing a repository</a></li>
    <li className=""><a href="#">Results</a></li>
  </ul>
        </div>
</nav>
    </div>
</section>


<section className="section" id='search-div'>
    <div className="container">
        <div className="level-item">
                <div className="field has-addons">
                    <p className="control">
                        <input name="github_repo" className="input is-primary" type="text" placeholder='Enter repository URL' onChange={this.handleURLChange} required/>
                    </p>
                    <p className="control">
                            <button className="button is-primary is-outlined" onClick={this.focusURLInput}>
                            Search
                            </button>
                    </p>
                </div>
        </div>

        <div className="content">
            <h3>GitHub</h3>
            <p><a href="https://github.com/">GitHub</a> is a Web-based Git version control repository hosting service. It is mostly used for computer code.
                It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features.
                It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.<br/>
                GitHub is mostly used for code.<br/>
                In addition to source code, GitHub supports the following formats and features:
                </p>
            <ol>
                <li>Documentation, including automatically rendered README files in a variety of Markdown-like file formats (see README files on GitHub)</li>
                <li>Issue tracking (including feature requests) with labels, milestones, assignees and a search engine</li>
                <li>Wikis</li>
                <li>Pull requests with code review and comments</li>
                <li>Commits history</li>
                <li>Graphs: pulse, contributors, commits, code frequency, punch card, network, members</li>
                <li>Integrations Directory</li>
            </ol>
            <blockquote>GitHub.com was a start-up business, which in its first years provided enough revenue to be funded solely by its three founders and start taking on employees.
                In July 2012, four years after the company was founded, Andreessen Horowitz invested $100M in venture capital. In July 2015 GitHub raised another $250M of venture capital in a series B round.
                Investors were Sequoia Capital, Andreessen Horowitz, Thrive Capital and other venture capital funds.
                As of August 2016, GitHub was making $140M in Annual Recurring Revenue.</blockquote>
            <p>GitHub, Inc. was originally a flat organization with no middle managers; in other words, "everyone is a manager" (self-management).
                Employees can choose to work on projects that interest them (open allocation). However, salaries are set by the chief executive.</p>
        </div>
    </div>
</section>
                <div id='chat-component'>
                    <ChatComponent/>
                </div>
</div>

//            <div>
//                <div id='search-div'>
//                    <input type="text" placeholder='Enter repository URL' onChange={this.handleURLChange} required/>
//                    <button onClick={this.focusURLInput}>Search</button>
//                </div>
//                <div id='chat-component'>
//                    <ChatComponent/>
//                </div>
//            </div>
        );
    }
};

export default SearchComponent;