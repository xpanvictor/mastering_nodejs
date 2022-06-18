const { dgram, port } = require('./netdgram');

const server = dgram.createSocket('udp4');

server
  .on('message', (msg, rinfo) => {
    process.stdout.write(
      `Got message: ${msg} from ${rinfo.address}:${rinfo.port} \n`
    );
    process.exit();
  })
  .bind(port);
