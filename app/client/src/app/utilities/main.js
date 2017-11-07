import requests from './requests';

let username;

//socket logic
/*let serverUTL = ''; //need server from gays!
let socket = io.connect(serverUTL);*/

//DOM handlers and socket requests
let singleIssueClickHandler = (doc) => {
    //still empty
}

let backButtonClickHandler = () => {
    document.getElementsByClassName('issues-list-div')[0].style.display = 'block';
    document.getElementsByClassName('issues-comments-div')[0].style.display = 'none';
    document.getElementById('comments-list-ui').innerHTML = "";
    //document.getElementById('send-message-input').reset(); //better without it (clear input)
}

let sendButtonClickHandler = () => {

    let message = document.getElementById('send-message-input').value;
    console.log('Send message data:', message, getUsername(), requests.getIssueNum(), requests.getIssueID());

    /*socket.emit('sendMessage', {
        message: message,
        issueNumber: requests.getIssueNum(),
        issueId: requests.getIssueID()
    })*/
}

/*
socket.on('getMessage', (data) => {
    //get json
    console.log(data);
})*/

let logout = () => {
    window.location.reload();
}

//especially for export
let setUsername = (value) => {
    username = value;
}
let getUsername = () => {
    return username;
}

//export obj
const units = {
    singleIssueClickHandler:singleIssueClickHandler,
    backButtonClickHandler:backButtonClickHandler,
    sendButtonClickHandler:sendButtonClickHandler,
    setUsername: setUsername,
    logout:logout
}

export default units;