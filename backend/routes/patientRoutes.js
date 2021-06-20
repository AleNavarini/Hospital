'use strict'

var express = require('express');
var controller = require('../controller/patientsController');

var router = express.Router();

router.get('/home', controller.home);
router.get('/patient/:id', controller.getPatient);
router.get('/patient/', controller.getPatients);
router.post('/patient', controller.createPatient);

// export router
module.exports = router;