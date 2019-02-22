var express = require('express');
var router = express.Router();
var ctrlPages=require('../controllers/pages');
var ctrlsubCat_andProd=require('../controllers/subCat_andProd');
var ctrlviewProducts=require('../controllers/viewproduct');
  
  /* Location of the pages */
  router.get('/',ctrlPages.index);
  router.get('/mens',ctrlPages.mens);
  router.get('/womens',ctrlPages.womens);
  router.get('/mens/mens-clothing',ctrlsubCat_andProd.mensclothing);
  router.get('/womens/womens-clothing',ctrlsubCat_andProd.womensclothing);
  router.get('/mens/mens-accessories', ctrlsubCat_andProd.mensaccessories);
  router.get('/womens/womens-jewelry',ctrlsubCat_andProd.womensjewelry);
  router.get('/womens/womens-accessories',ctrlsubCat_andProd.womensaccessories);      
  router.get('/mens/mens-clothing/mens-clothing-suits',ctrlsubCat_andProd.mensclothingsuits);  
  router.get('/mens/mens-clothing/mens-clothing-jackets',ctrlsubCat_andProd.mensclothingjackets); 
   router.get('/mens/mens-clothing/mens-clothing-dress-shirts',ctrlsubCat_andProd.mensclothingdressshirts);
   router.get('/mens/mens-clothing/mens-clothing-shorts',ctrlsubCat_andProd.mensclothingshorts);
   router.get('/mens/mens-clothing/mens-clothing-pants',ctrlsubCat_andProd.mensclothingpants);
   router.get('/p/:pid',ctrlviewProducts.product);
module.exports = router;
