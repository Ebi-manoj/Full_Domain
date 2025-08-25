const { fork } = require('child_process');

const child = fork('./childfork');

console.log('started');

child.send('start');

child.on('message', data => console.log(`Message from child${data}`));
console.log('ended');
