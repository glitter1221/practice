const express = require('express');
const app = express();
const path = require('path');

const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000;

const socketIO = require('socket.io');
const io = socketIO(server);

const moment = require('moment');

app.use(express.static(path.join(__dirname, 'src')));
server.listen(port, () => { 
    console.log(`Connected on ${port}!`)
});

console.log(path.join(__dirname, 'src'));

// npm i ngrok
// localhost 실행 후 dir에서 ngrok http (해당port) 해주면 forwarding 주소로 외부에서 접속 가능 

io.on("connection", (socket) => {
    socket.on('chatting', (data) => {
        const { name, msg } = data;
        io.emit('chatting', {
            name,
            msg,
            time: moment(new Date()).format("h:mm A")
        });
    });
});