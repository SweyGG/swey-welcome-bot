var http = require('http');

http.createServer(function (req, res){
  res.write("SWEY");
  res.end();
}).listen(8080);