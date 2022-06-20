const fs = require('fs');

if (
  !fs.existsSync(__dirname + 'cha1.txt') &&
  !fs.existsSync(__dirname + 'cha2.txt')
) {
  fs.writeFileSync('./cha1.txt', '');
  fs.writeFileSync('./cha2.txt', '');
}

let count = 0;
const reader = function (sender, receiver, time) {
  if (count == 1) {
    let txt = fs.readFileSync(sender);
    count = 0;
    return fs.writeFileSync(receiver, `${time}:\n ${txt}`);
  }
  return count++;
};

const transferto2 = (curr, prev) => {
  reader('cha1.txt', 'cha2.txt', curr.mtime);
};

const transferto1 = (curr, prev) => {
  reader('cha2.txt', 'cha1.txt', curr.mtime);
};

fs.watchFile('./cha1.txt', transferto2);
fs.watchFile('./cha2.txt', transferto1);
