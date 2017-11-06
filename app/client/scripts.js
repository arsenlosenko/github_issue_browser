let username = 'AndriiDronDiachuk';
let password = 'andrii1333';
let encodedAuth = btoa(username + ':' + password);

fetch('https://api.github.com/user', {
    method: 'get',
    headers: {
        'Authorization': 'Basic ' + encodedAuth
    }
})
    .then((res) => {
        return res.json();
    })
    .then((result) => {
        console.log('login info', result);

        /*fetch('https://api.github.com/authorizations', {
            method: 'post',
            headers: {
                'Authorization': 'Basic ' + encodedAuth
            },
            body: {
                "scopes": [
                    "public_repo"
                ],
                "note": "admin  bla bla"
            }

        })
            .then((res) => {
                return res;
            })
            .then((result) => {
                console.log(result);
            })*/
    })
let repoUrl = 'ksytnyk/service_station';
repoUrl = 'facebook/react';

//branches
fetch('https://api.github.com/repos/' + repoUrl + '/branches', {
    method: 'get'
})
    .then((res)=>{
        return res.json();
    })
    .then((result) => {

        console.log('branches',result);

    })

//collaborators -- need token
/*fetch('https://api.github.com/repos/' + repoUrl + '/collaborators', {
    method: 'get'
})
    .then((res)=>{
        return res.json();
    })
    .then((result) => {

        console.log('collaborators',result);

    })*/

//branches
fetch('https://api.github.com/repos/' + repoUrl, {
    method: 'get'
})
    .then((res)=>{
        return res.json();
    })
    .then((result) => {

        console.log('general info', result);

    })

//issues
fetch('https://api.github.com/repos/' + repoUrl + '/issues', {
    method: 'get'
})
    .then((res)=>{
        return res.json();
    })
    .then((result) => {

        console.log('issues',result);

    })

//particular issue
let issueNumber = 11337;

fetch('https://api.github.com/repos/' + repoUrl + '/issues/' + issueNumber, {
    method: 'get'
})
    .then((res)=>{
        return res.json();
    })
    .then((result) => {

        console.log('particular issues',result);

    });


//comments in issue
issueNumber = 11337;

fetch('https://api.github.com/repos/' + repoUrl + '/issues/' + issueNumber + '/comments', {
    method: 'get'
})
    .then((res)=>{
        return res.json();
    })
    .then((result) => {

        console.log('issues comments',result);

    })