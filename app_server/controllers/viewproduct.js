module.exports.product = function(req, res){
  var _         = require("underscore");
  var mdbClient = require('mongodb').MongoClient;
  
  mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
    var id = req.params.prid;  
  var productFound = db.collection('products').findOne({id: id});
  productFound.then(function(product) {

    res.render("product", { 
      
      
      // Template data
      
      product: product,
      queryid: id 
    });

    db.close();
  });
    
     
    
  });
};
