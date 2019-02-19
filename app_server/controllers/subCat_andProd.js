module.exports.mensclothing = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find().toArray(function(err, items) {
      res.render("mensclothing", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "Mens Clothing Including Suits, Tops, Bottoms & More",
        items : items
      });

      db.close();
    });
  });
};
module.exports.womensclothing = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find().toArray(function(err, items) {
      res.render("womensclothing", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "Womens Clothing Including Outerwear, Tops, Bottoms & More",
        items : items
      });

      db.close();
    });
  });
};
module.exports.mensaccessories = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find().toArray(function(err, items) {
      res.render("mensaccessories", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "Men's Accessories Belts, Wallets. Gloves, Hats, Watches, Luggage & More",
        items : items
      });

      db.close();
    });
  });
};
module.exports.womensjewelry = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find().toArray(function(err, items) {
      res.render("womensjewelry", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "Women's Jewelry including Earrings, Bracelets and Necklaces.",
        items : items
      });

      db.close();
    });
  });
};

module.exports.womensaccessories = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find().toArray(function(err, items) {
      res.render("womensaccessories", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "Women's Jewelry including Earrings, Bracelets and Necklaces.",
        items : items
      });

      db.close();
    });
  });
};
module.exports.mensclothingsuits = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('products');
    
    collection.find().toArray(function(err, items) {
      res.render("mensclothingsuits", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "",
        items : items
      });

      db.close();
    });
  });
};
module.exports.mensclothingjackets = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('products');
    
    collection.find().toArray(function(err, items) {
      res.render("mensclothingjackets", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "",
        items : items
      });

      db.close();
    });
  });
};
module.exports.mensclothingdressshirts = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('products');
    
    collection.find().toArray(function(err, items) {
      res.render("mensclothingdressshirts", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "",
        items : items
      });

      db.close();
    });
  });
};
module.exports.mensclothingshorts = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('products');
    
    collection.find().toArray(function(err, items) {
      res.render("mensclothingshorts", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "",
        items : items
      });

      db.close();
    });
  });
};
module.exports.mensclothingpants = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('products');
    
    collection.find().toArray(function(err, items) {
      res.render("mensclothingpants", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        title : "",
        items : items
      });

      db.close();
    });
  });
};