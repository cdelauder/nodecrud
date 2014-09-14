var express = require('express')
var server = express()
var todoModule = require('./js/model.js')
var todo = new todoModule()
var querystring = require('querystring')



server.get('/', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html')
})

server.post('/new', function(req, res) {
  req.on('data', function (chunk) {
    var body = chunk.toString()
    var form = querystring.parse(body)
    todo.create(newTodo(form))
  })
})

function newTodo(formdata) {
  var data = {title: formdata['title'],
              content: formdata['content']}
  return data
}


server.listen(3000)