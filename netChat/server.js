const net = require('net');

net
  .createServer((socket) => {
    process.stdin.pipe(socket);
    socket.on('data', (data) => {
      console.log(data.toString('utf-8'));
    });
  })
  .listen(8080);
