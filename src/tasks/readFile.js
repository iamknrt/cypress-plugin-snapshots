const fs = require('fs');

function readFile({ filename, encoding = 'base64' }) {
  return fs.readFileSync(filename, { encoding });
}

module.exports = readFile;
