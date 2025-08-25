const { exec } = require('child_process');

exec('python script.py', (err, data, stderr) => {
  if (err) return console.log(err);
  console.log(data);
});
