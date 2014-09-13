var express = require('express')
var server = express()
var todoModule = require('./js/model.js')
var todo = new todoModule()



server.get('/', function(req, res) {
  todo.all()
  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html')
})


server.listen(3000)