const { promisify } = require('util');
const fs = require('fs');

// converting callback based func to promise
let readFileAsync = promisify(fs.readFile);

let [executable, absPath, target, ...msg] = process.argv;

console.log(
  msg.length
    ? msg.join(' ')
    : `Running file ${absPath} using binary ${executable}`
);

readFileAsync(target, { encoding: 'utf-8' })
  .then(console.log)
  .catch((err) => console.log('Err occured: ', err.message));
