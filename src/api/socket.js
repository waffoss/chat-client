import openSocket from 'socket.io-client';
const socket = openSocket('http://192.168.0.10:3001');


function sendMessage(message) {
    socket.emit('chat message', message);
}

function getMessage(cb) {
    socket.on('chat message', message => cb(null, message));
}

export { sendMessage,getMessage };