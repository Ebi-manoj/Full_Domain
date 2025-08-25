const { spawn } = require('child_process');

///////////////////////////////
//Executing shell commands
const ls = spawn('cmd', ['/c', 'dir']);

ls.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', data => {
  console.error(`stderr: ${data}`);
});

ls.on('close', code => {
  console.log(`Child process exited with code ${code}`);
});

////////////////////////////////////////////
//Executing python file

const py = spawn('python', ['script.py']);

py.stdout.on('data', messg => console.log(messg.toString()));
py.stderr.on('data', messg => console.log(messg.toString()));
py.on('close', () => console.log('finished'));
