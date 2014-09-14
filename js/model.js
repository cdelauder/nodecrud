module.exports = todo

function todo() {
  this.db = require('mongodb').MongoClient;

  // Connect to the db
  this.collection = this.db.connect("mongodb://localhost:27017/db", function(err, db) {
    if(err) {
      console.log("We fucked up yo!");
    }
    return db.collection('junk')
});
  console.log(this.collection)

}

todo.prototype = {
  all: function() {
  return this.collection.find()
    //get all the todos
  },

  create: function(doc) {
    this.db.connect("mongodb://localhost:27017/db", function(err, db) {
    if(err) {
      console.log("We fucked up yo!");
    }
    db.collection('stuff').insert(doc, function(err) {
      console.log(err)
    })
    // return db.collection('junk')
});
    console.log(this.collection)
    // console.log(this.collection.find())
  }
}