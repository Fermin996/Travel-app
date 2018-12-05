const express = require('express');
const router  = express.Router();
var User = require('../models/User')

router.get('/', (req, res, next) => {
  User.find(function(err, users){
    res.render('results', {users: users})
  })
});

module.exports = router;
