var fs = require('fs');
exports.send404 = function(response) {
  console.error("Resource not found");
  response.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  response.end('Not Found');
}
exports.sendJson = function(data, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.end(JSON.stringify(data));
}
exports.send500 = function(data, response) {
  console.error(data.red);
  response.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  response.end(data);
}

exports.staticFile = function(data, response) {
    var path = '.' + data + '/home.html'
    var readStream;
    fs.stat(path, function(error, stats) {
      if (error || stats.isDirectory()) {
        return exports.send404(response);
      }
      readStream = fs.createReadStream(path);
      readStream.pipe(response);
    });
  }
