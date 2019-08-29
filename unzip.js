var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createUnzip())
   .pipe(fs.createWriteStream('unzip.txt'));
  
console.log("File Compressed.");