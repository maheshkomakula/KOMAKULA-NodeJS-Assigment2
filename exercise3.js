const express = require('express');
const path = require('path');
const app = express();

app.get('/api/exercise3/pages/home', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'home.html'));
});

app.get('/api/exercise3/pages/about', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'about.html'));
});

app.get('/api/exercise3/pages/contact', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'contact.html'));
});

app.listen(80);
