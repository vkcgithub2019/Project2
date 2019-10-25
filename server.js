// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
var mySqlStore = require("express-mysql-session");
require("dotenv").config();
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// var sqlStore;
// if (process.env.NODE_ENV === "production") {
//   sqlStore = new mySqlStore({
//     user: process.env.JAWSDB_USER,
//     password: process.env.JAWSDB_PWD,
//     database: process.env.JAWSDB_DB,
//     host: process.env.JAWSDB_HOST,
//     port: process.env.JAWSDB_PORT
//   })
// } else {
//   sqlStore = new mySqlStore({
//     user: "root",
//     password: "",
//     database: "classicPart",
//     host: "127.0.0.1",
//     port: 3306
//   })
// }
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true,
  store: sqlStore
}));
app.use(passport.initialize());
app.use(passport.session());


require("./routes/api-routes.js")(app);
require("./routes/html-routes")(app);
require("./routes/Authentication-routes")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force:false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
  });
}).catch(function(err){
  console.log("DB CONNECTION ERR: ", err)
})
