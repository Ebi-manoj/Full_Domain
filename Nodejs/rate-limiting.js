const rateLimit = require('express-rate-limit');
const express = require('express');

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  messagge: 'Too many request',
});

const app = express();

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => console.log('server running on the port'));
