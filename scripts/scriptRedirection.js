let nameF = 'Name';
let emailF = 'Email';
let subjectF = 'Subject';
let messageF = 'Message';

// submitButton = document.querySelector(".submit-btn");
function runSubmit() {

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
            message: messageF,
            receiver: "visit@ashminbhattarai.com.np"

        })
    };

    
    // url = 'https://api.ashminbhattarai.com.np/mail';
    url = 'http://localhost:8000/mail';
    
    fetch(url, option)
    .then((response) => alert("Message sent successfully!"))
    .catch((json) => alert("Could not send the message. Please send email at visit@ashminbhattarai.com.np."));
    
    // // clear the input field
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#subject").value = '';
    document.querySelector("#message").value = '';

    // // prevent the form from submitting
    return false;
    
}