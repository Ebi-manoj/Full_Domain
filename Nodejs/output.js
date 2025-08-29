// setImmediate(() => {
//   console.log('Immediate start');
//   Promise.resolve().then(() => console.log('Promise in Immediate'));
//   console.log('Immediate end');
// });
// console.log('Main thread');
// let count = 0;

// function tick() {
//   if (count < 3) {
//     console.log('nextTick', count);
//     count++;
//     process.nextTick(tick);
//   }
// }

// tick();
// console.log('Done');

async function main() {
  console.log('M1');
  process.nextTick(() => console.log('nextTick'));
  await Promise.resolve();
  console.log('M2');
  setImmediate(() => console.log('Immediate'));
}

main();
console.log('Outside main');
