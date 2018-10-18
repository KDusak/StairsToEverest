const express = require('express');
const userService = require('../lib/user-service.js');
const router = express.Router();
// Users API

/* Create new user */
router.post('/create', function (req, res, next) {
  userService.createNewUser(req.body).then((user) => {
    res.send(user);
  });

});

/* Login */
router.post('/login', function (req, res, next) {
  userService.getUserByLogin(req.body.username, req.body.password).then((user) => {
    res.send(JSON.stringify(user, null, 2));
  }).catch((error) => {
    res.status(404);
    res.send({message: error});
  });
});

module.exports = router;
