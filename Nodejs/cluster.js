const http = require('http');
const os = require('os');
const cluster = require('cluster');

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(cpus);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      if (req.url == '/') {
        res.end(`Fast page1 running on${process.pid}`);
      } else if (req.url == '/slow-page') {
        const start = Date.now();
        for (let i = 0; i < 100000000000; i++) {}

        res.end(`Fast-page ${Date.now() - start}`);
      }
    })
    .listen(3000, () => console.log(`Server running on ${process.pid}`));
}

// http
//   .createServer((req, res) => {
//     if (req.url == '/') {
//       res.end(`Fast page1 running on${process.pid}`);
//     } else if (req.url == '/slow-page') {
//       const start = Date.now();
//       for (let i = 0; i < 10000000000; i++) {}

//       res.end(`Fast-page ${Date.now() - start}`);
//     }
//   })
//   .listen(3000, () => console.log(`Server running on ${process.pid}`));
