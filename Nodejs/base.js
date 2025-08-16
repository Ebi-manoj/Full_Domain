const path = require('path');
const filePath = '/Nodejs/base.js';

//////////////////////////////////////////////
//Basic usefull functions of path module
/*
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.join('/user', '/order', 'order.js'));
*/

/////////////////////////////////////////////////
///Basic creation of events using Event Emitter
const eventEmitter = require('events');
const emitter = new eventEmitter();

// emitter.on('order', item => {
//   console.log(`You ordered ${item}`);
// });

// emitter.emit('order', 'Pizza');

/////////////////////////////////////////////////
////Basic operations using fs module

// const fs = require('fs');
// fs.writeFile('example.txt', 'Hello my world', err => {
//   if (err) {
//     return console.log('Error in writing the code');
//   }
//   console.log('Writed succefully');
// });

// fs.readFile('example.txt', 'utf-8', (err, data) => {
//   if (err) return console.log('Error in reading the data');
//   console.log('Readed file', data);
// });

// fs.unlink('example.txt', err => {
//   if (err) return console.log('Error in Deleting the file');
//   console.log('Deleted succefully');
// });

///////////////////////////////////////////////////
///Create a server using HTTP module

const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello word');
  })
  .listen(3000, () => console.log('server running on 3000'));
