
let getRepositoryInfo = (repoUrl) => {

    let array = repoUrl.split('/');
    let parsedRepoUrl = array[3] + '/'+array[4];
    console.log(parsedRepoUrl);

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
        })
}