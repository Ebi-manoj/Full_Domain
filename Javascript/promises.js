////////////////////////////////////////
///js objects that represent eventual completion or failure of an asynchrnous operation

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 1000);
  //   resolve('Promise resolved');
});
// promise.then(data => console.log(data)).catch(err => console.log(err));

///////////////////////////////////////////////////////
///Promise chaining
//When consuming a promise using then in then block it will return a new Promise that can handled using other then
//sequentially which resulted in chaining

function first() {
  return new Promise((resolve, reject) => {
    console.log('First executed');
    resolve('Promise 1');
  });
}
function second(first) {
  return new Promise((resolve, reject) => {
    console.log('seond executed', first);
    resolve('Promise 2');
  });
}
function third(second) {
  return new Promise((resolve, reject) => {
    console.log('third executed', second);
    resolve('Promise 3');
  });
}
///if any promised rejected it will not resolve nothing after the rejected promise

// first()
//   .then(data => second(data))
//   .then(data => third(data))
//   .then(data => console.log(data))
//   .catch(err => console.log('error', err));

////////////////////////////////////////////////////////////////////
///PROMISE API

const p1 = Promise.reject('p1 resolved');
const p2 = Promise.reject('p2 resolved');
const p3 = Promise.reject('p3 resolved');

//1)Promise.all()
//returns all resolved promise in an array ,if one is rejected it will give only the rejected promise

// Promise.all([p1, p2, p3])
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//2)Promise.allSettled()
//return all promise whether it is rejected or resolved

// Promise.allSettled([p1, p2, p3]).then(data => console.log(data));

//3)Promise.any()
//return any first resolved promise,in case of all rejection it will gives a promise of aggregated error

// Promise.any([p1, p2, p3])
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//4) Promise.race()
//return any first resolved or rejected promise

// Promise.race([p1, p2, p3])
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
