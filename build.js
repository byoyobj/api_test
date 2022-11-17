const decompress = require("decompress");
var fs = require('fs');

decompress("example.zip", "./")
  .then((files) => {
    console.log(files);
    fs.unlinkSync("./example.zip");
  })
  .catch((error) => {
    console.log(error);
  });