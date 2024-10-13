const socket = io();

const form = document.getElementById('form');
const messageInput = document.getElementById('message-input');
const nicknameInput = document.getElementById('nickname-input');
const messagesList = document.getElementById('messages');
const onlineCount = document.getElementById('online-count');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (messageInput.value) {
        socket.emit('chat message', { nickname: nicknameInput.value, message: messageInput.value });
        messageInput.value = '';
    }
});

socket.on('chat message', (data) => {
    const item = document.createElement('li');
    item.textContent = `${data.nickname}: ${data.message}`;
    messagesList.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('online count', (count) => {
    onlineCount.textContent = count;
});
