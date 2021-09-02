const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.render('index');
  });
  
router.get('/contact', function (req, res) {
      res.render('contact');
    });
  
router.get('/art', function (req, res) {
      res.render('article');
    });

    module.exports = router