var fs = require('fs');

fs.writeFile('NodeFile\sample.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});