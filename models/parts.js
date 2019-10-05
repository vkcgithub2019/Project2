module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define("Parts", {
      partName: DataTypes.STRING,
      department: DataTypes.STRING,
      partCondition: DataTypes.STRING,
      price: DataTypes.INTEGER
  
    });
    
  
    // Part.associate = function(models) {
    //   // Associating parts with user
    //   // When a part is deleted, also delete any associated user
    //   Part.belongsTo(models.User, {
    //     // onDelete: "cascade"
    //   });
    // };
  
    return Part;
  };
  