const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred while reading the file:', err);
    return;
  }
  console.log('Data from welcome.txt:', data);
});
