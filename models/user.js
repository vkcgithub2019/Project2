// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
<<<<<<< HEAD
=======
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
>>>>>>> 31589e8a87a78bab659fb576e6afcd86e4973317
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
<<<<<<< HEAD


    
  });

  User.associate = function(models) {
    // Associating parts with user
    // When a part is deleted, also delete any associated user
    User.hasMany(models.Parts, {
      onDelete: "cascade"
    });
  };
=======
  });
>>>>>>> 31589e8a87a78bab659fb576e6afcd86e4973317
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
