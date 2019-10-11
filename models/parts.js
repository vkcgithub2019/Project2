module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define("Parts", {
      partName: DataTypes.STRING,
      department: DataTypes.STRING,
      partCondition: DataTypes.STRING,
      price: DataTypes.INTEGER
  
    });
    
    // when a user is deleted, also delete any associated parts




    //don't want to delete user if one part is deleted because the same user may also 
    //have other parts listed for sale

    
  
    // Part.associate = function(models) {
    //   // Associating parts with user
    //   // When a part is deleted, also delete any associated user
    //   Part.belongsTo(models.User, {
    //     // onDelete: "cascade"
    //   });
    // };
  
    return Part;
  };
  