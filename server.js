const express = require("express");
//const http = require('http');
//const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

const app = express();

//var server = http.createServer();
//server.on('request', doRequest);

// ファイルモジュールを読み込む
var fs = require('fs');

// リクエストの処理
// function doRequest(req, res) {
//
//     // ファイルを読み込んだら、コールバック関数を実行する。
//     fs.readFile('./index.html', 'utf-8' , doReard );
//
//     // コンテンツを表示する。
//     function doReard(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     }
//
// }

app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile("./index.html",{root: __dirname});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
