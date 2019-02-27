/* GET home page */
module.exports.index = function(req, res){  
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var collection = db.collection('categories');
    
    collection.find({'parent_category_id':'root'}).toArray(function(err, items) {
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

 
module.exports.category = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var category= req.params.cid;
    var categoriesFound = db.collection('categories').find({id:category});
    
    categoriesFound.toArray(function(err, categories) {
      res.render("category", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
       
        categories:categories,
        queryid : category
      });

      db.close();
    
    });
  });
};
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





module.exports.productlist = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var productcategory= req.params.pcid;
    var productsFound = db.collection('products').find({'primary_category_id':productcategory});
    productsFound.toArray(function(err, products) {
      res.render("productlist", { 
        // Underscore.js lib
        _     : _, 
        
        // Template data
        
         products:products,
         queryid: productcategory
      });

      db.close();
    
    });
  });
};

