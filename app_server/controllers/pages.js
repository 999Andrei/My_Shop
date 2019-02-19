/* GET home page */
module.exports.index = function(req, res){  
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find().toArray(function(err, items) {
      res.render("index", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "My Shop",
        items : items
      });

      db.close();
    });
  });
};

  /* GET 'mens' page */
module.exports.mens = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find().toArray(function(err, items) {
      res.render("mens", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "Men's Footwear, Outerwear, Clothing & Accessories",
        items : items
      });

      db.close();
    });
  });
};
  /* GET 'womens' page */
module.exports.womens = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find().toArray(function(err, items) {
      res.render("womens", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "Women's Footwear, Outerwear, Clothing & Accessories",
        items : items
      });

      db.close();
    });
  });
};
  