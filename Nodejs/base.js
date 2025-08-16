const path = require('path');
const filePath = '/Nodejs/base.js';
const fs = require('fs');

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
const { Duplex, Transform } = require('stream');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello word');
  })
  .listen(3000, () => console.log('server running on 3000'));

//////////////////////////////////////////////////////////////
///STREAMS AND BUFFER

//Character set--this dictates how to represent a character in a form of number (UNICODE and ASCII)
//Character encoding--this dicatetes how to represent a number in character set in a binary format (UTF-8,in bytes means 8bits)

///STREAM--Its a sequential of data that should be transformed from one place to another place
//BUFFER--Its a intentially small area that node maintains in runtime in the process of stream Data

// const buffer = Buffer.from('Ebi');
// buffer.write('Hello mr');
// console.log(buffer);
// console.log(buffer.toString());

// const readableStream = fs.createReadStream('file.txt', {
//   encoding: 'utf-8',
//   highWaterMark: 2,
// });
// const writableStream = fs.createWriteStream('file2.txt');

// readableStream.on('data', chunk => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });

/////////////////////////////////////////////////////////////////////////
// const duplex = new Duplex({
//   read() {
//     this.push('Hi from readble side');
//     this.push(null);
//   },
//   write(chunk, encoding, callback) {
//     console.log('Writable received', chunk.toString());
//     callback();
//   },
// });

// duplex.write('Hello ebi');
// duplex.on('data', chunk => {
//   console.log('Readable', chunk.toString());
// });

/////////////////////////////////////////////////////////////////
//TRANSFORM STREAM

// const upperCase = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   },
// });

// upperCase.write('Hello Ebi');
// upperCase.on('data', chunk => {
//   console.log(chunk.toString());
// });
