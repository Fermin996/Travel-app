const express = require('express');
const router  = express.Router();
var User = require('../models/User')


router.post('/', (req, res, next) => {

  console.log(req.body)

  const location = req.body.location;
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);
  User.find({location: location})
  .then(users =>{
    let filteredUsers = users.filter(user => {
      let userStartDate = new Date(user.startDate);
      return userStartDate >= startDate && userStartDate <= endDate
    })
    res.render('results', {users: filteredUsers})
  }).catch(e=>{
    console.log(e)
  })
})



module.exports = router;
