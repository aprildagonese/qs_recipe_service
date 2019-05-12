var express = require('express');
var router = express.Router();
var recipesController = require('../controllers/recipesController')

router.post('/', recipesController.create);
router.get('/', recipesController.index);
router.get('/calories', recipesController.calories);

module.exports = router;
