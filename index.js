var express = require('express')
var exphbs = require('express-handlebars')
var server = express()
var todoModule = require('./js/model.js')
var todo = new todoModule()
var querystring = require('querystring')
server.engine('handlebars', exphbs({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');



server.get('/', function(req, res) {
  todo.all(res, index)
})

server.get('/:id', function(req, res) {
  todo.show(res, show, req.params.id)
})

server.get('/:id/edit', function(req, res) {
  todo.edit(res, edit, req.params.id)
})

server.get('/:id/delete', function(req, res) {
  todo.destroy(req.params.id)
  res.redirect('/')
})

server.post('/new', function(req, res) {
  req.on('data', function (chunk) {
    var body = chunk.toString()
    var form = querystring.parse(body)
    todo.create(newTodo(form))
  })
  res.redirect('/')
})

server.post('/:id', function(req, res) {
  req.on('data', function (chunk) {
    var body = chunk.toString()
    var form = querystring.parse(body)
    todo.update(form, req.params.id)
  })
  res.redirect('/' + req.params.id)
})


function newTodo(formdata) {
  var data = {title: formdata['title'],
              content: formdata['content']}
  return data
}

var index = function (res, data) {
  res.render('index', {todos: data})
}

var show = function (res, data) {
  res.render('show', {todo: data})
}

var edit = function (res, data) {
  res.render('edit', {todo: data})
}

server.listen(3000)