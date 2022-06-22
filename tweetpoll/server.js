let http = require('http');
let fs = require('fs');
let cryp = require('crypto');

let theuser = null;
let userpos = 0;
let tweetfile = 'tweets.txt';

let sendNext = function (fd) {
  let buffer = Buffer.alloc(140);
  fs.read(fd, buffer, 0, 140, userpos * 140, (err, num) => {
    if (!err && num > 0 && theuser) {
      ++userpos;
      theuser.write(`data: ${buffer.toString('utf-8', 0, num)}\n\n`);
      return process.nextTick(() => {
        sendNext(fd);
      });
    }
  });
};

function start() {
  fs.open(tweetfile, 'r', (err, fd) => {
    if (err) {
      setTimeout(start, 1000);
    }
    fs.watch(tweetfile, (event, filename) => {
      if (event === 'change') {
        sendNext(fd);
      }
    });
  });
}

start();

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
