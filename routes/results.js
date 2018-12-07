const express = require('express');
const router  = express.Router();
var User = require('../models/User')


router.post('/', (req, res, next) => {
  // User.find(function(err, users){
  //   res.render('results', {users: users})
  // })
  console.log(req.body)

  const location = req.body.location;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  User.find({location: location})
  .then(users =>{
    console.log(users)
    res.render('results', {users})
  }).catch(e=>{
    console.log(e)
  })
})



module.exports = router;
