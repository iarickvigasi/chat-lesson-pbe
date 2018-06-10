console.log('Hello world');
var sendButton = document.getElementById('send');
var textInput = document.getElementById('message');
var senderInput = document.getElementById('name');
sendButton.addEventListener('click', function() {
    console.log('I will send');
    var text = textInput.value;
    var senderName = senderInput.value;

    textInput.value = '';
    senderName.value = '';

    var formData = new FormData();
    formData.append("message", text);
    formData.append("nickname", senderName);
    fetch('/chat/createmessage.php', { method: 'POST', body: formData } );
});

document.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var text = textInput.value;
        var senderName = senderInput.value;

        textInput.value = '';
        senderName.value = '';

        var formData = new FormData();
        formData.append("message", text);
        formData.append("nickname", senderName);
        fetch('/chat/createmessage.php', { method: 'POST', body: formData } );
    }
});
setInterval(function() {
    fetch('/chat/getmessages.php')
    .then(res => res.json())
    .then(messages => {
        var messagesContainer = document.getElementById('messages');
        var messagesHTML = '';
        for (var i=0; i < messages.length; i++) {
            var msg = messages[i];
            messagesHTML += '<div>'+msg.sender_name +':' + msg.text+'</div>';
        }
        messagesContainer.innerHTML = messagesHTML;
     })
    .then(res => console.log(res));
}, 1000);
