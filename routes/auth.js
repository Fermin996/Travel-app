const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require('passport');


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
  console.log(req.app.locals.loggedUser)
  res.render('myProfile', req.app.locals.loggedUser)
})

router.post('/myprofile', (req, res, next) => {
  User.findByIdAndUpdate(req.app.locals.loggedUser._id, req.body, {new: true})
  .then(newUser => {
    req.app.locals.loggedUser = newUser;
    res.redirect('/auth/myProfile')
  })
  .catch(err=>{
    res.send(err)
  })
})



module.exports = router