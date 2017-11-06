/*

let repoUrl = 'ksytnyk/service_station';
repoUrl = 'facebook/react';
*/

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