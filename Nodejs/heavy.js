const { parentPort } = require('worker_threads');

for (let i = 0; i < 10000; i++) {}

parentPort.postMessage('Finished');
