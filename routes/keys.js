var express = require('express');
var router = express.Router();
var keysController = require('../controllers/keysController')

/* GET users listing. */
router.get('/', keysController.register);

module.exports = router;
