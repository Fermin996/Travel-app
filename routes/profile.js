const express = require('express');
const router  = express.Router();
const User = require('../models/User')

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
  .then(user =>{
    res.render('profile', user);
  })
  .catch(err => {
    next(err)
  })
});



module.exports = router;