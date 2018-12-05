const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const editSchema = require('../models/editProfile');

// router.get('/:id', (req, res, next) => {
//   const { id } = req.params;
//   User.findById(id)
//   .then(user =>{
//     res.render('myProfile', user);
//   })
//   .catch(err => {
//     next(err)
//   })
// });

// router.get('/')
// const edit = new editSchema({
//   user: req.user,
//   bio: req.body.bio,
//   interests: req.body.interests,
//   languages: req.body.interests,

// })

module.exports = router;