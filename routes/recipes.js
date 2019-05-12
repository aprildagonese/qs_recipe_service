var express = require('express');
var router = express.Router();
var recipesController = require('../controllers/recipesController')

router.post('/', recipesController.create);
router.get('/', recipesController.index);
router.get('/calories', recipesController.calories);
router.get('/time', recipesController.time);
router.get('/ingredients', recipesController.ingredCount);

module.exports = router;
