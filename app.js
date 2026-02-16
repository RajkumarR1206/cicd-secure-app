const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "CI/CD Secure App Running" });
});

app.get('/add', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ result: a + b });
});

module.exports = app;
