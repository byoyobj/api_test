const decompress = require("decompress");
var fs = require('fs');
var axios = require('axios');

let token = "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";

decompress("example.zip", "./")
  .then((files) => {
    console.log(files);
    fs.unlinkSync("./example.zip");
    deleteFileApi(token, 'example.zip', '048a02e79f63d0bf699a17eb19824e4df7786f46');
  })
  .catch((error) => {
    console.log(error);
  });

function deleteFileApi(token, name, sha) {

    var data = JSON.stringify({
        "message": "delete file",
        "sha": sha
    });

    var config = {
        method: 'delete',
        url: 'https://api.github.com/repos/byoyobj/api_test/contents/' + name,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error.response.data);
    });
}
