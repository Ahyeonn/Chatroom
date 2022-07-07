const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Display chat messages
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

// connected 
io.on('connection', (socket) => {
  console.log(socket.id+' connected');
  io.emit('online', socket.id);
  // disconnected
  socket.on('disconnect', () => {
    console.log(socket.id+' disconnected');
    io.emit('offline', socket.id);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
