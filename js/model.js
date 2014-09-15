module.exports = todo

function todo() {
  this.db = require('mongodb').Db;
}

todo.prototype = {
  all: function(res, index) {
    this.db.connect("mongodb://localhost:27017/db", function(err, db) {
      var todos = []
      if(err) {
        console.log("We fucked up yo!");
      }
      db.collection('stuff').find().toArray(function(err, docs) {
        todos = docs
      })
      res.locals.todos = todos
      console.log('inside db function ' +res.locals.todos)
      index(res)
    })
  },

  create: function(doc) {
    this.db.connect("mongodb://localhost:27017/db", function(err, db) {
      if(err) {
        console.log("We fucked up yo!");
      }
      db.collection('stuff').insert(doc, function(err) {
        if (err) {
          console.log(err)
        }
      })
    });
    
  }
}