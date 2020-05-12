const fs = require('fs');

console.log('Starting "first-app.js"');

fs.writeFileSync("hello.txt", 'Hello From node.js');

