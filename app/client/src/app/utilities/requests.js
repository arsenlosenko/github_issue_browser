import units from '../utilities/main'

let issueNum;
let issueID;

let getRepositoryInfo = (repoUrl) => {

    let array = repoUrl.split('/');
    let parsedRepoUrl = array[3] + '/' + array[4];

    fetch('https://api.github.com/repos/' + parsedRepoUrl, {
        method: 'get'
    })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log('general info', result);

            if (result.id) {
                document.getElementById('chat-component').style.display = 'block';
                document.getElementById('search-div').style.display = 'none';
                document.getElementById('repo-name').textContent = result.name;
                document.getElementById('repo-language').textContent = result.language;
                document.getElementById('repo-stars').textContent = result.stargazers_count;
                document.getElementById('repo-owner').textContent = result.owner.login;
                document.getElementById('repo-watchers').textContent = result.watchers_count;
                document.getElementById('repo-subscribers').textContent = result.subscribers_count;
                getBranchesInfo(parsedRepoUrl);
                //getStatisticData(result.id);
            }
        })
}

let getBranchesInfo = (repoUrl) => {
    fetch('https://api.github.com/repos/' + repoUrl + '/branches', {
        method: 'get'
    })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log('branches', result);
            document.getElementById('repo-brunches').textContent = result.length;
            getIssuesInfo(repoUrl);
        })
}

//issues
let getIssuesInfo = (repoUrl) => {
    fetch('https://api.github.com/repos/' + repoUrl + '/issues', {
        method: 'get'
    })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log('issues', result);

            if (result.length !== 0) {
                //create list of issues
                result.map((item, index) => {
                    let li = document.createElement("li");
                    let status = document.createElement("p");
                    status.innerHTML = item.state;
                    status.setAttribute('class','issue-status');
                    let title = document.createElement("p");
                    title.innerHTML = item.title;
                    title.setAttribute('class','issue-title');
                    li.appendChild(status);
                    li.appendChild(title);

                    //now can create single dialog for each issue
                    li.setAttribute("id", item.id);
                    li.setAttribute("number", item.number);
                    li.setAttribute("class", "issue-item");
                    li.addEventListener("click", () => {
                        units.singleIssueClickHandler(li);
                        getIssueComments(repoUrl, item.number, item.id);
                    })
                    //
                    document.getElementById("list-ui").appendChild(li);
                })
            } else {
                let workArea = document.getElementsByClassName("issues-list-div")[0];
                let span = document.createElement("div");
                span.setAttribute("class", "issue-empty-list");
                span.innerHTML = 'This repository have no issues';
                workArea.appendChild(span);
            }
        })
}

//comments in issue
let getIssueComments = (repoUrl, issueNumber, issueId) => {
    fetch('https://api.github.com/repos/' + repoUrl + '/issues/' + issueNumber + '/comments', {
        method: 'get'
    })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log('issues comments', result);

            //for send message handler
            issueNum = issueNumber;
            issueID = issueId;

            //manage DOM
            document.getElementsByClassName('issues-list-div')[0].style.display = 'none';
            document.getElementsByClassName('issues-comments-div')[0].style.display = 'block';

            //create back button
            let backButton = document.createElement('button');
            backButton.setAttribute('id', 'back-button');
            backButton.addEventListener('click', () => {
                units.backButtonClickHandler();
            })
            backButton.innerHTML = 'Back';
            document.getElementById('comments-list-ui').appendChild(backButton);

            if(result.length !== 0) {
                //create list of comments
                result.map((item, index) => {
                    let li = document.createElement('li');
                    let message = document.createElement('p');
                    message.innerHTML = item.body;
                    message.setAttribute('class','comment-message');
                    let user = document.createElement('p');
                    user.innerHTML = item.user.login;
                    user.setAttribute('class','comment-author');
                    let date = document.createElement('p');
                    date.innerHTML = item.updated_at;
                    date.setAttribute('class','comment-date');
                    li.appendChild(message);
                    li.appendChild(user);
                    li.appendChild(date);
                    li.setAttribute('class', 'issue-item');
                    document.getElementById('comments-list-ui').appendChild(li);
                })

            } else {
                //empty issue comments
            }
        })
}

//get statistics data from python API
let getStatisticData = (repoId) => {
    console.log('repoID', repoId);

    let urlAPI = ''  //wait gays
    fetch(urlAPI, {
        method: 'get'
    })
        .then((res) => {
            console.log('temp statistic data', res);
            return res.json();
        })
        .then((result) => {
            console.log('statistic repository data', result);
        });
}

//particular issue - still useless
let getIssue = (issueNumber, repoUrl) => {
    fetch('https://api.github.com/repos/' + repoUrl + '/issues/' + issueNumber, {
        method: 'get'
    })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log('particular issues', result);
        });
}

//especially for export
let getIssueNum = () => {
    return issueNum;
}
let getIssueID = () => {
    return issueID;
}

//export obj
const request = {
    getRepositoryInfo: getRepositoryInfo,
    getIssueNum: getIssueNum,
    getIssueID: getIssueID,
    getStatisticData: getStatisticData
}

export default request;