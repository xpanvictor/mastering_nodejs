console.log('Running');

// keep process running
setInterval(() => {}, 1e6);

process.on('SIGUSR1', () => {
  console.log('Got your signal');
});
