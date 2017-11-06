let getRepositoryInfo = (repoUrl) => {

    let array = repoUrl.split('/');
    let parsedRepoUrl = array[3] + '/'+array[4];

    fetch('https://api.github.com/repos/' + parsedRepoUrl, {
        method: 'get'
    })
        .then((res)=>{
            return res.json();
        })
        .then((result) => {
            console.log('general info', result);

            if (result.id) {
                document.getElementById('chat-component').style.display = 'block';
                document.getElementById('search-div').style.display = 'none';
                document.getElementById('repo-name').textContent=result.name;
                document.getElementById('repo-language').textContent=result.language;
                document.getElementById('repo-stars').textContent=result.stargazers_count;
                document.getElementById('repo-owner').textContent=result.owner.login;
                document.getElementById('repo-watchers').textContent=result.watchers_count;
                document.getElementById('repo-subscribers').textContent=result.subscribers_count;
                getBranchesInfo(parsedRepoUrl);
            }
        })
}

let getBranchesInfo = (repoUrl) => {
    fetch('https://api.github.com/repos/' + repoUrl + '/branches', {
        method: 'get'
    })
        .then((res)=>{
            return res.json();
        })
        .then((result) => {
            console.log('branches',result);
            document.getElementById('repo-brunches').textContent=result.length;
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

            result.map((item,index)=>{
                let li = document.createElement("LI");
                let content = document.createTextNode(item.title + ' - ' + item.state);
                li.appendChild(content);

                //now can create single dialog for each issue
                li.setAttribute("id", item.id);
                li.setAttribute("number", item.number);
                li.addEventListener("click", function(){
                    console.log(this.getAttribute("id"));
                    console.log(this.getAttribute("number"));
                });
                //
                document.getElementById("list-ui").appendChild(li);
            })
        })
}

//particular issue
let getIssue = () => {
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

//comments in issue
let getIssueComments = () => {
    fetch('https://api.github.com/repos/' + repoUrl + '/issues/' + issueNumber + '/comments', {
        method: 'get'
    })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log('issues comments', result);
        })
}