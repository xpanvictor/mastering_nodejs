const cp = require('child_process');
let child = cp.fork(__dirname + '/lovechild.js');

child.on('message', (msg) => {
  console.log('Child said: ', msg);
});
child.send('I love you');
