const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

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

app.listen(80);
