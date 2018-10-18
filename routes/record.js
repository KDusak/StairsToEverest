var express = require('express');
var router = express.Router();

// Records API

/* Get all records */
router.get('/all', function (req, res, next) {

  var records = [];
  try {
    var recordsString = fs.readFile(recordsPath, (err, data) => {
      if (err) {
        console.log('READING FILE ERROR : ', err);
      } else {
        console.log('READING OPENED : ', JSON.stringify(data, null, 2));
        res.send(data);
      }
    });
    //records = JSON.parse(recordsString);
  } catch (err) {
    console.log('BIG UNHADLED ERROR : ', err);
  }

});

/* Get my records */
router.get('/user/:userId', function (req, res) {
  res.send('Not implemented');
});

/* Add new record */
router.post('/add', function (req, res) {

  var newRecord = req.body;
  var records = [];

  fs.readFile(recordsPath, (err, data) => {
    if (err) {
      console.log('error in file reading ', err);
    }
    records = JSON.parse(data);
    records.push(newRecord);
    fs.writeFile(recordsPath, JSON.stringify(records, null, 2), (writeErr) => {
      if (writeErr) {
        console.log('SAVING FILE FAILED', writeErr);
      }
      res.send({message: "Success"});
    });
  });
});

module.exports = router;
