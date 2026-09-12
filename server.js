const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).type('text/html').send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>NodeJS Assignment 2</title>
<style>
body { font-family: system-ui, sans-serif; padding: 40px 20px; background: #f8fafc; color: #1e293b; max-width: 650px; margin: 0 auto; }
h1 { font-size: 26px; margin-bottom: 24px; color: #0f172a; }
.section { background: #ffffff; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
ul { list-style: none; padding: 0; margin: 0; }
li { margin: 12px 0; }
a { color: #2563eb; text-decoration: none; font-size: 17px; font-weight: 500; }
a:hover { text-decoration: underline; color: #1d4ed8; }
</style>
</head>
<body>
<div class="section">
<h1>NodeJS Assignment 2</h1>
<ul>
<li><a href="/api/exercise1">Exercise 1: /api/exercise1</a></li>
<li><a href="/api/exercise2">Exercise 2: /api/exercise2</a></li>
<li><a href="/api/exercise3/pages/home">Exercise 3: /api/exercise3/pages/home</a></li>
<li><a href="/api/exercise3/pages/about">Exercise 3: /api/exercise3/pages/about</a></li>
<li><a href="/api/exercise3/pages/contact">Exercise 3: /api/exercise3/pages/contact</a></li>
<li><a href="/home.html">Exercise 4: /home.html</a></li>
<li><a href="/about.html">Exercise 4: /about.html</a></li>
<li><a href="/contact.html">Exercise 4: /contact.html</a></li>
</ul>
</div>
</body>
</html>`);
});

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