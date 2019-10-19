// Requiring our models and passport as we've configured it
var sequelize = require("sequelize");
var db = require("../models");
var passport = require("../config/passport");
var Op = sequelize.Op;

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //   res.json(req.user);
  // });

  // // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // // otherwise send back an error

  //FIXME: doesn't take in req.body (Trae fixed this by changing req.body to actual object after line 19)
  app.post("/api/addParts", function (req, res) {
    db.Parts.create({
      partName: req.body.partName,
      department: req.body.department,
      partCondition: req.body.partCondition,
      price: req.body.price,
      description: req.body.description,
      phone: req.body.phone,  
      photo: req.body.photo
    })
      .then(function (data) {
        console.log(data)
        res.json(data)

      })
      .catch(function (err) {
        console.log(err);
        res.send(err)
      });
  }); 
  
  app.post("/api/addUser", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,

    })
      .then(function (data) {
        console.log(data)
        res.json(data)

      })
      .catch(function (err) {
        console.log(err);
      });
  });

//   app.get("/api/parts/:term", (req, res) => {
//     db.Parts.findAll({
//         // order: [['jobNumber', 'ASC']],
//         where: { partName: { [Op.like]: "%" + req.params.term + "%" }}
        
//     }).then(data => {
//         res.json(data);
//     }) 
// })

  app.post("/api/login",passport.authenticate("local"), function (req, res) {
    // console.log("User exists");
    res.json(req.body.email);
    })
 

  //this one works
  app.get("/api/parts/:partName", function (req, res) {
    console.log(req.params)
    db.Parts.findAll({

      where: {
        partName: req.params.partName.toLowerCase()
      }

    })
      .then(function (data) {
        // console.log(data)
        res.json(data)

      })
      .catch(function (err) {
        console.log(err);
      });
  });

  app.get("/api/parts/mostrecentten", function (req, res) {
    db.Parts.findAll({
      order: [["id", "DESC"]],
      limit: 10
    })
      .then(function (data) {
        // console.log(data)
        res.json(data)

      })
      .catch(function (err) {
        console.log(err);
      });
  });


  // // Route for logging user out
   app.get("/logout", function(req, res) {
     req.logout();
     res.redirect("/");
   });

  //  Route for getting some data about our user to be used client side
   app.get("/api/user_data", function(req, res) {
     if (!req.user) {
   //     The user is not logged in, send back an empty object
       res.json({});
     } else {
   //     Otherwise send back the user's email and id
   //     Sending back a password, even a hashed password, isn't a good idea
       res.json({
         email: req.user.email,
         id: req.user.id
       });
     }
   });

  //route for getting parts from parts table


  // this one works
  app.get("/api/parts/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Parts.findOne({
      where: {
        id: req.params.id
      },
      /* include: [db.Post] */
    }).then(function (dbPart) {
      res.json(dbPart);
    });
  });


  app.get("/api/user/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.user.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Parts]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
}

