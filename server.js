const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/api/exercise1', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'index.html'));
});

app.get('/api/exercise2', (req, res) => {
  const filePath = path.join(__dirname, 'lib', 'users.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.trim().split(/\r?\n/);
  let html = '<table>\n';
  lines.forEach((line, index) => {
    const cols = line.split('|').map(item => item.trim());
    html += '    <tr>\n';
    cols.forEach(col => {
      html += index === 0 ? `        <th>${col}</th>\n` : `        <td>${col}</td>\n`;
    });
    html += '    </tr>\n';
  });
  html += '</table>';
  res.status(200).type('text/html').send(html);
});

app.get('/api/exercise3/pages/home', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'home.html'));
});

app.get('/api/exercise3/pages/about', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'about.html'));
});

app.get('/api/exercise3/pages/contact', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'contact.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT);