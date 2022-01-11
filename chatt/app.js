const express = require('express');
const app = express();
const path = require('path');

const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000;

const socketIO = require('socket.io');
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'src')));
server.listen(port, () => { 
    console.log(`Connected on ${port}!`)
});

console.log(path.join(__dirname, 'src'));

io.on("connection", (socket) => {
    socket.on('chatting', (data) => {
        console.log(data);
        io.emit('chatting', data);
    });
});