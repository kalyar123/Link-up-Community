const chatform = document.getElementById('chat-form');
const socket = io();
socket.on('message', message =>{
    console.log(message);
    outputMessage(message);
});

chatform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage',msg);
})

function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML=` <p className="meta">
    Brad <span>9:12pm</span>
  </p>
  <p className="text">
    ${message}
  </p>`
  document.querySelector('.chat-messages').appendChild(div)
}