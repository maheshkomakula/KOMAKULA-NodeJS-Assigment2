const express = require('express');
const path = require('path');
const app = express();

app.get('/api/exercise1', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'index.html'));
});

app.listen(80);
