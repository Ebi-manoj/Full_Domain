const http = require('http');
const { Worker } = require('worker_threads');

http
  .createServer((req, res) => {
    if (req.url == '/') {
      res.end('Home');
    } else if ((req.url = '/slow')) {
      const worker = new Worker('./heavy.js');
      worker.on('message', msge => res.end(msge));
    }
  })
  .listen(3000, () => console.log('Server running'));
