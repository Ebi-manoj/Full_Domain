const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  http
    .createServer((req, res) => {
      if (req.url == '/') {
        console.log(req.headers.authorization);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
      } else if (req.url == '/slowpage') {
        for (let i = 0; i < 6000000000; i++) {}
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Slow page');
      }
    })
    .listen(3000, () => console.log('Server running on the port'));
}
