const Readable = require('stream').Readable;
const writeStream = require('fs').createWriteStream;

let r = new Readable();
let ws = new writeStream('./point.txt', { flags: 'w', mode: 0666 });

let count = 0;
r._read = function () {
  count++;
  if (count > 10) {
    return r.push(null);
  }
  setTimeout(() => r.push(count + ' point\n'));
};

r.pipe(ws);
