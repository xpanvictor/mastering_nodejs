const { dgram, port } = require('./netdgram');
const client = dgram.createSocket('udp4');

let msg = process.argv[2];
msg = Buffer.from(msg);

client.send(msg, 0, msg.length, port, 'localhost');
