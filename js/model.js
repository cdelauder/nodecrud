module.exports = todo

function todo() {
  this.db = require('mongodb').MongoClient;

  // Connect to the db
  this.db.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if(!err) {
    console.log("We are connected");
  }
});
}

todo.prototype = {
  all: function() {
  console.log('fuck yeah')
    //get all the todos
  },

  create: function() {
    // create todo and return single todo
  }
}