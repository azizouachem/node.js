const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('An error occurred while creating the file:', err);
    return;
  }
  console.log('File created successfully!');
});
