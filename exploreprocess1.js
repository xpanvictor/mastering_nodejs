let size = Number(process.argv[2]);
let n = process.argv[3] || 100;

const buffers = [];
for (let i = 0; i < n; i++) {
  buffers.push(Buffer.alloc(size));
  process.stdout.write(process.memoryUsage().heapTotal + '\n');
}
