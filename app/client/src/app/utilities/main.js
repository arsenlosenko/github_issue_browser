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
    console.log('Send message data:', formatDate(new Date()), message, getUsername(), requests.getIssueNum(), requests.getIssueID());

    //append send message;
    console.log(FindByAttributeValue('issue-id', requests.getIssueID()));
    let currentUl = FindByAttributeValue('issue-id', requests.getIssueID());

    let li = document.createElement('li');
    let messageSend = document.createElement('p');
    messageSend.innerHTML = message;
    messageSend.setAttribute('class','comment-message');
    let user = document.createElement('p');
    user.innerHTML = getUsername();
    user.setAttribute('class','comment-author');
    let date = document.createElement('p');
    date.innerHTML = formatDate(new Date());
    date.setAttribute('class','comment-date');
    li.appendChild(messageSend);
    li.appendChild(user);
    li.appendChild(date);
    li.setAttribute('class', 'issue-item');
    currentUl.appendChild(li);

    //send message to the server
    /*socket.emit('sendMessage', {
        message: message,
        issueNumber: requests.getIssueNum(),
        issueId: requests.getIssueID()
    })*/
}

/*socket.on('getMessage', (data) => {
    //get json
    console.log(data);
     /!*
     {
        issueID,
        message,
        username,
        date
     }
      *!/

    //append received message
    console.log(FindByAttributeValue('issue-id', data.issueID));
    let currentUl = FindByAttributeValue('issue-id', data.issueID);

    let li = document.createElement('li');
    let messageSend = document.createElement('p');
    messageSend.innerHTML = data.message;
    messageSend.setAttribute('class','comment-message');
    let user = document.createElement('p');
    user.innerHTML = data.username;
    user.setAttribute('class','comment-author');
    let date = document.createElement('p');
    date.innerHTML = data.date;
    date.setAttribute('class','comment-date');
    li.appendChild(messageSend);
    li.appendChild(user);
    li.appendChild(date);
    li.setAttribute('class', 'issue-item');
    currentUl.appendChild(li);
})*/

let FindByAttributeValue = (attribute, value) => {
    var All = document.getElementsByTagName('*');
    for (let i = 0; i < All.length; i++)       {
        if (All[i].getAttribute(attribute) == value) { return All[i]; }
    }
}
//justify date output
let formatDate = (val) => {
    let date = new Date(val);
    let array = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ];

    let res = array.map(item => {
        if (item < 10) item = "0" + item;
        return item;
    });

    return res[0] + '.' + res[1] + '.' + res[2] + ' ' + res[3] + ':' + res[4] + ':' + res[5];
}

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