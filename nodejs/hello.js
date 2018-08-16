const http = require('http');
const os = require('os');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var ret = new Date(Date.now()).toLocaleString() + "<br/>" +JSON.stringify (os.networkInterfaces());
  
  res.end(ret);
}).listen(8080);
console.log('Server running at http://localhost:8080/');