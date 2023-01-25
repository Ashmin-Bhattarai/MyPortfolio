let nameF = 'Name';
let emailF = 'Email';
let subjectF = 'Subject';
let messageF = 'Message';

submitButton = document.querySelector(".submit-btn");
submitButton.addEventListener("click", function () {

    // get the value of the input field
    nameF = document.querySelector("#name").value;
    emailF = document.querySelector("#email").value;
    subjectF = document.querySelector("#subject").value;
    messageF = document.querySelector("#message").value;

    // send request to localhost:8000/hello
    option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameF,
            email: emailF,
            subject: subjectF,
            message: messageF
        })
    };

    
    url = 'https://api.ashminbhattarai.com.np/mail';
    
    fetch(url, option)
    .then((response) => response.json())
    .then((json) => console.log(json));
    
    // clear the input field
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#subject").value = '';
    document.querySelector("#message").value = '';
    

});