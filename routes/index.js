var express = require('express');
var indexRoute=require('../controllers/index');
var router = express.Router();


/* GET home page. */
router.get('/', indexRoute.index);


module.exports = router;
