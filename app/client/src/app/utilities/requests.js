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
                document.getElementById('repo-name').innerHTML = result.name;
//                document.getElementById('repo-language').innerHTML = result.language;
                document.getElementById('repo-stars').innerHTML = result.stargazers_count;
//                document.getElementById('repo-owner').innerHTML = result.owner.login;
                document.getElementById('repo-watchers').innerHTML = result.watchers_count;
                document.getElementById('repo-subscribers').innerHTML = result.subscribers_count;
                getBranchesInfo(parsedRepoUrl);
                getStatisticData(parsedRepoUrl);
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
            document.getElementById('repo-brunches').innerHTML = result.length;
            getIssuesInfo(repoUrl);
        })
}

//issues
let getIssuesInfo = (repoUrl) => {
    fetch('https://api.github.com/repos/' + repoUrl + '/issues' + '?per_page=100', {
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
                    let li = document.createElement("div");
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
                    li.setAttribute("class", "issue-item box");
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
    fetch('https://api.github.com/repos/' + repoUrl + '/issues/' + issueNumber + '/comments' + '?per_page=100', {
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
            backButton.setAttribute('class', 'button');
            backButton.addEventListener('click', () => {
                units.backButtonClickHandler();
            })
            backButton.innerHTML = 'Back';
            document.getElementById('comments-list-ui').appendChild(backButton);

            if(result.length !== 0) {
                //create list of comments
                result.map((item, index) => {
                    let li = document.createElement('div');
                    li.setAttribute('class','comment-block box');
                    let message = document.createElement('p');
                    message.innerHTML = item.body;
                    message.setAttribute('class','comment-message');
                    let user = document.createElement('p');
                    user.innerHTML = item.user.login;
                    user.setAttribute('class','comment-author');
                    let date = document.createElement('p');

                    //justify timeDate output
                    let array1 = item.updated_at.split('T');
                    let array2 = array1[0].split('-');
                    let tempDate = array2[0] + '.' + array2[1] + '.' + array2[2];
                    let tempTime = array1[1].slice(0, -1);
                    let finalTimeDate = tempDate + ' ' + tempTime;

                    date.innerHTML = finalTimeDate;
                    date.setAttribute('class','comment-date');
                    li.appendChild(message);
                    li.appendChild(user);
                    li.appendChild(date);
                    li.setAttribute('class', 'issue-item box');
                    document.getElementById('comments-list-ui').appendChild(li);
                })

            } else {
                //empty issue comments
            }
            document.getElementById('comments-list-ui').setAttribute('issue-id', issueId);
            document.getElementById('comments-list-ui').setAttribute('issue-number', issueNumber);
        })
}

//get statistics data from python API
let getStatisticData = (repoUrl) => {
    console.log('repoID', repoUrl);

    let urlAPI = 'http://104.197.117.21:4000/api/v1/issues'
    fetch(urlAPI, {
        method: 'post',
        body: {
            "repo_name": repoUrl
        }
    })
        .then((res) => {
            console.log('temp statistic data', res);
            return res.json();
        })
        .then((result) => {
            console.log('statistic repository data', result);
            //document.getElementById('repo-day-issue').innerHTML = result;
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
    getIssueID: getIssueID
}

export default request;