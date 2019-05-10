var express = require('express');
var router = express.Router();
var recipesController = require('../controllers/recipesController')

router.get('/', recipesController.calories);

module.exports = router;
