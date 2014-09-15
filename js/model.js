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
        index(res, todos)
      })
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
  },

  show: function(res, callback, id) {
    this.db.connect("mongodb://localhost:27017/db", function(err, db) {
      var todo 
      if(err) {
        console.log("We fucked up yo!");
      }
      var ObjectID = require('mongodb').ObjectID
      db.collection('stuff').findOne({_id: ObjectID.createFromHexString(id)}, function(err, doc) {
        if(err) {
        console.log("We fucked up yo!");
        }
        callback(res, doc)
      })
    })
  },

  edit: function(res, callback, id) {
    this.db.connect("mongodb://localhost:27017/db", function(err, db) {
      var todo 
      if(err) {
        console.log("We fucked up yo!");
      }
      var ObjectID = require('mongodb').ObjectID
      db.collection('stuff').findOne({_id: ObjectID.createFromHexString(id)}, function(err, doc) {
        if(err) {
        console.log("We fucked up yo!");
        }
        callback(res, doc)
      })
    })
  },

  update: function(data, id) {
    this.db.connect("mongodb://localhost:27017/db", function(err, db) {
      var todo 
      if(err) {
        console.log("We fucked up yo!");
      }
      var ObjectID = require('mongodb').ObjectID
      db.collection('stuff').update({_id: ObjectID.createFromHexString(id)}, {$set: data}, function(err, doc) {
        if(err) {
        console.log("We fucked up yo!");
        }
      })
    })
  }
}