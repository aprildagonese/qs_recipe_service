var express = require('express');
var router = express.Router();
var recipesController = require('../controllers/recipesController')

router.get('/', recipesController.create);

module.exports = router;
