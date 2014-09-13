var express = require('express')
var server = express()

server.get('/', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html')
})


server.listen(3000)