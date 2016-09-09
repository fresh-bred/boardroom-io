const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('draw', coords => {
    socket.broadcast.emit('other client draw', coords);
  });
  socket.on('erase', coords => {
    socket.broadcast.emit('other client erase', coords);
  });
  socket.on('clear', () => {
    socket.broadcast.emit('clear all canvas');
  });
});

http.listen(3000, () => console.log('listening on *:3000'));
