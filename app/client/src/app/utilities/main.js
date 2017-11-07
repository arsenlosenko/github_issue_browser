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
    console.log('Send message data:', message, issueNum);

    //there will be socket emit to server
}