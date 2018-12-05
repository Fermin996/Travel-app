const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require('passport');


const isLogged = (req, res, next) => {
  if (!req.app.locals.loggedUser) return res.redirect('/login');
  next();
}

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local"), (req, res, next)=>{
  req.app.locals.loggedUser = req.user
  res.redirect('/myProfile')
  // successRedirect: "/",
  // failureRedirect: "/auth/login",
  // failureFlash: true,
  // passReqToCallback: true
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.get('/myprofile', isLogged, (req,res,next)=>{
  const { loggedUser } = req.app.locals
  res.render('myProfile', loggedUser)
})

router.post('/myprofile', (req, res, next) => {
  const { loggedUser } = req.app.locals
  
  User.findByIdAndUpdate(loggedUser._id, req.body, {new: true})
  .then(user => {
    loggedUser = user
    res.render('/myProfile')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

})

module.exports = router