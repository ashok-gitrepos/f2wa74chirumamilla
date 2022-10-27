var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mydata', function(req, res, next) {
  res.render('mydata', { title: 'Ashok Chirumamilla' });
});

module.exports = router;
