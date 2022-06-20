let fs = require('fs');
let http = require('http');

let theuser = null;
let userpos = 0;
let tweetfile = 'tweets.txt';

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });

    theuser = res;

    res.write(':' + Array(2049).join(' ') + '\n');
    res.write('retry: 2000\n');

    res.socket.on('close', () => {
      theuser = null;
    });
  })
  .listen(8080);
