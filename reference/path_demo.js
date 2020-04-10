const path = require('path');

//Base file name
console.log('File Name:');

console.log('File Name: ' + __filename);
console.log(path.basename(__filename));

// //Base directory name
// console.log(__dirname);
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create Path Object
console.log(path.parse(__filename).base);

//Concatenate Paths
//../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
