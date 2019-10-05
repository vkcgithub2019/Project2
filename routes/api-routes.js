// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //   res.json(req.user);
  // });

  // // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // // otherwise send back an error
  app.post("/api/parts", function(req, res) {
    db.Parts.create(req.body)
      .then(function(data) {
        console.log(data)
        res.json(data)
        
      })
      .catch(function(err) {
        console.log(err);
      });
  });
  app.get("/api/parts", function(req, res) {
    db.Parts.findAll({})
      .then(function(data) {
        console.log(data)
        res.json(data)
        
      })
      .catch(function(err) {
        console.log(err);
      });
  });


  // // Route for logging user out
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

  // // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });

  //route for getting parts from parts table



app.get("/api/parts/:id", function(req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Parts.findOne({
    where: {
      id: req.params.id
    },
    /* include: [db.Post] */
  }).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});


app.get("/api/user/:id", function(req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.user.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Parts]
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

};
