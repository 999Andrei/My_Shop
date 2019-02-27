var express = require('express');
var router = express.Router();
var ctrlPages=require('../controllers/pages');
var ctrlviewProduct=require('../controllers/viewproduct');
  
  /* Location of the pages */
  router.get('/',ctrlPages.index);
  router.get('/:cid',ctrlPages.category);
  router.get('/product/:prid',ctrlviewProduct.product);
  router.get('/:cid/mens-clothing',ctrlPages.mensclothing);
  router.get('/:cid/mens-accessories',ctrlPages.mensaccessories);
  router.get('/:cid/womens-clothing',ctrlPages.womensclothing);
  router.get('/:cid/womens-accessories',ctrlPages.womensaccessories);
  router.get('/:cid/womens-jewelry',ctrlPages.womensjewelry);
  router.get('/:cid/:sid/:pcid',ctrlPages.productlist);
  
module.exports = router;
