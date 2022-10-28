var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  let input = req.query.input;
  if(input == undefined) 
    input = Math.random() * 10;
  var hypot = Math.hypot(input);
  var ceil = Math.ceil(input);
  var clz32 = Math.clz32(input);
  console.log(JSON.stringify(req.params));
  res.render('compute', { title: 'Ashok Chirumamilla',
  input:input,
  input:input,
  input:input,
  hypot:hypot,
  ceil:ceil,
  clz32:clz32
});
});

module.exports = router;