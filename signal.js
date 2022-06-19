console.log('Running');

// keep process running
setInterval(() => {}, 1e6);

// when the signal cancel is sent
process.on('SIGINT', () => {
  console.log('Received the sigint signal');
  process.exit(1);
});
