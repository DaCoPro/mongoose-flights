var express = require('express');
const { render } = require('../server');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index);

module.exports = router;
