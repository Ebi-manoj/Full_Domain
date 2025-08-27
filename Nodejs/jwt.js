const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cookieparse = require('cookie-parser');

app.use(express.json());
app.use(cookieparse());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Home Page' });
});

const JWT_SECRET = 'SECRETKEY';
const user = {
  username: 'Ebi',
  password: 1234,
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== user.username || password != password) {
    return res.status(401).json({ message: 'Invalid credintials' });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.cookie('token', token, {
    httpOnly: true,
  });
  res.status(200).json({ success: true, message: 'Logged in' });
});

app.get('/dashboard', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(403).json({ message: 'Un Authorized' });
  const decoded = jwt.verify(token, JWT_SECRET);
  console.log(decoded);
  if (decoded.username !== user.username) {
    res.clearCookie(token);
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.status(200).json({ message: 'Dash Board' });
});

app.listen(3000, () => console.log('Server running on the port'));
