let redis = require('redis');

let client = redis.createClient();
(async function () {
  await client.connect();
})();

console.log('hey');
client.set('user', 'Victor', (err) => {
  console.log('hey');
  client.get('user', (err, data) => {
    console.log(data);
  });
});
