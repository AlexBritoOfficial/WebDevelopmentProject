const fs = require('fs');
const path = require('path');

// /** Create Folder using arrow function for callback function*/
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if(err) throw err;
//     console.log('Folder created....');
// });

/***Create Folder 2nd version without arrow function for callback function*/
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Folder created....');
// });

/***Create and write to a file, using arrow for callback function */

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
  if (err) throw err;

  console.log('File written to...');

  /***Apppend to the file */
  fs.appendFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'I love Node.js',
    err => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
});

// /***Create and write to a file, using function for callback function */
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),{}, function(err) =>{
//     if(err) throw err;
//     console.log('Folder created...');
// })

/***Read from a file */
fs.readFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'utf-8',
  (err, data) => {
    console.log(data);
  }
);

/***Rename a file */
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'hellowrld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed....');
  }
);
