const express = require('express');
const router  = express.Router();
const User = require('../models/User');





// const Edit = require('../models/myProfile');

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

// router.get('/', (req, res, next)=>{

//   Edit.find({user: req.user}, function(err,Edit){
//     if(err){
//       res.write('error')
//     }
//    return next()
//   })

// const edit = new Edit({
//   user: req.user,
//   bio: req.body.bio,
//   interests: req.body.interests,
//   languages: req.body.languages,
//   });

//   edit.save()
//   .then(()=>{
//     return next()
//   })
//   .catch(err=>{
//     console.log(err)
//   })

//   res.render('myProfile')
// })

// console.log('well at least something is working')




// module.exports = router;

// function isLoggedIn(req, res, next){
//   if (req.isAuthenticated()){
//     return next();
//   }
//  res.redirect('/') 
// }

// function notLoggedIn(req, res, next){
//   if (!req.isAuthenticated()){
//     return next();
//   }
//  res.redirect('/') 
//}