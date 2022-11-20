const decompress = require("decompress");
var fs = require('fs');

decompress("example.zip", "./")
  .then((files) => {
    console.log(files);
    fs.unlinkSync("./example.zip");
    fs.rename('1667906459310_-_sddssd.fmo', '1667906459310_-_sddssd.html', () => {
      console.log("\nFile Renamed!\n");
    });
  })
  .catch((error) => {
    console.log(error);
  });