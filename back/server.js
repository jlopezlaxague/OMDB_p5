const express = require('express')
const bodyParser = require("body-parser");
const app = express()
//Passport
const cookieParser = require ('cookie-parser')
const sessions = require ('express-session') //reads and writes cookies, entiendo que no necesitaría el cookie parser porque ahora está integrado en esto, probar.
const passport = require ('passport')
const LocalStrategy = require("passport-local").Strategy;

const db = require('./api/db')
const User = require('./api/User')
const Favourite = require('./api/Favourite')

//Llamar al index router 
const authAPI = require('./api/routes')
//Archivos estáticos
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //ver

// AUTH
app.use(cookieParser()); // popula req.cookie
app.use(
  sessions({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true,
  })
);// popula req.session

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Strategy (reconocer validez de datos ingresados)
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) { // email not found
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }
            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// Express Routing
app.use("/api", authAPI);
app.use("/*", function (req, res, next) {
    res.sendFile(__dirname + "/public/index.html")
})

//Servidor
db.sync({force: false})
    .then(() => {
        app.listen(3000, ()=>{
            console.log("listening to port 3000...")
        })
    })