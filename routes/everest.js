var express = require('express');
var router = express.Router();
var fs = require('fs');
var everestService = require('../lib/everest-service');


var recordsPath = 'data/records.json';

// Everest API
/* Return list of all everests */
router.get('/', function(req, res, next) {
  everestService.getAllEverests();
});

/* Return everest by ID */
router.get('/:everestId', function(req, res, next) {
  everestService.getEverestById(req.params['everestId']);
});

/* create new Everest */
router.put('/create', function(req, res, next) {
  everestService.saveEverest(JSON.parse(req.body));
});

/* update existing everest */
router.post('/update', function(req, res, next) {
  everestService.updateEverest(JSON.parse(req.body));
});

module.exports = router;
