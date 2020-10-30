const express = require("express");
const router = express.Router();
const User = require ("../User")
const Favourite = require ("../Favourite")
const passport = require('passport')

router.post('/register', function (req, res){
  User.create(req.body)
    .then((usuarioNuevo)=> res.send(usuarioNuevo))
})

router.post("/login", passport.authenticate("local"), (req, res) => {
  //console.log("usuario logueado", req.user)
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.post("/favourites", (req,res) => {
  Favourite.create(req.body)
  .then(() => res.sendStatus(200))
  
})

router.post("/searchfavourites", (req,res) => {
  Favourite.findAll({where: req.body})
  .then((favs) => {res.send(favs), console.log("favs buscados", favs)})
  
})

router.get("/userslogged", (req,res) => {
  if(req.isAuthenticated()){
    res.send(req.user)
  } else {
    res.send ()
  }
})

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
