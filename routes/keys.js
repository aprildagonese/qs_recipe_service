var express = require('express');
var router = express.Router();
var keysController = require('../controllers/keysController')

/* GET users listing. */
router.post('/', keysController.register);

module.exports = router;
