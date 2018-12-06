const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require('passport');
const uploadCloud = require('../helpers/cloudinary');


const isLogged = (req, res, next) => {
  if (!req.app.locals.loggedUser) return res.redirect('/auth/login');
  next();
}

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post("/signup", (req, res, next) => {
  // const username = req.body.username;
  // const password = req.body.password;
  // if (username === "" || password === "") {
  //   res.render("auth/signup", { message: "Indicate username and password" });
  //   return;
  // }
  User.register(req.body, req.body.password)
  .then(user => {
    
    res.redirect('myProfile');
  })
  .catch(err => {
    res.send(err);
  })
})

router.get("/login", (req, res, next) => {
  //if (req.app.locals.loggedUser) return res.redirect('/auth/myProfile')
  res.render("auth/login", { "message": req.flash("error") 
});
  //res.redirect('signup')
});

router.post("/login", passport.authenticate("local"), (req, res, next)=>{
  req.app.locals.loggedUser = req.user
  res.redirect('/auth/myProfile')
  // successRedirect: "/",
  // failureRedirect: "/auth/login",
  // failureFlash: true,
  // passReqToCallback: true
});

router.get("/signup", (req, res, next) => {
  if (req.app.locals.loggedUser) return res.redirect('/auth/myProfile')
  res.render("auth/signup");
});

router.get('/myprofile', isLogged, (req,res,next)=>{
  //console.log(req.app.locals.loggedUser)
  res.render('myprofile', req.app.locals.loggedUser)
})

router.post('/myprofile', uploadCloud.single('photoURL'), (req, res, next) => {
  console.log()
  const id = req.app.locals.loggedUser.id;
  //console.log(id)
  req.body.photoURL = req.file.url
  //const photoURL = req.file.url
  User.findByIdAndUpdate(id, req.body, {new:true})
  .then(user=>{
    res.redirect('/auth/myProfile')
 })
  
})


router.get('/callback/facebook', 
passport.authenticate('facebook', {
  successRedirect: '/auth/myProfile',
  failureRedirect: '/auth/login'
}))

router.post('/facebook', passport.authenticate('facebook', {scope: ['email']}), (req, res)=>{})


module.exports = router