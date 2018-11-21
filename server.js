const express = require("express");

const port = process.env.PORT || 8080;

const app = express();


var fs = require('fs');

app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile("./index.html",{root: __dirname});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
