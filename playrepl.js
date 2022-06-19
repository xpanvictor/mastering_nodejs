const repl = require('repl');

let starter = repl.start('> ');

starter.context.sayHello = function () {
  console.log('Hello world');
};

starter.context.cc = function (a, b) {
  return String(a).concat(String(b));
};
