// Simple Node.js API application using restify.
var restify = require('restify');
var ping = require('jjg-ping');

var server = restify.createServer();

// Greeting endpoint.
server.get('/hello/:name', function(req, res, next) {
  res.send('if you have problem running command npm install then you must run this command -->sudo chown -R ubuntu:ubuntu ~/nodejs-microservice<---to get the ownership of the folder for ubuntu. ' + req.params.name);
  next();
});

// Ping endpoint.
server.get('/ping/:server', function(req, res, next) {
  ping.system.ping(req.params.server, function(latency, status) {
    if (status) {
      res.send(req.params.server + ' is reachable (' + latency + ' ms ping).');
    }
    else {
      res.send(req.params.server + ' is unreachable.');
    }
    next();
  });
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
