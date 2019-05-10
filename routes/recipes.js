var express = require('express');
var router = express.Router();
var recipesController = require('../controllers/recipesController')

router.post('/', recipesController.create);
router.get('/', recipesController.index);

module.exports = router;
