'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rave = sequelize.define('Rave', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    date: DataTypes.STRING
  }, {});
  Rave.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: "Like",
      otherKey: "userId",
      foreignKey: "raveId",
      as: "likes"
    }
    Rave.belongsToMany(models.User, columnMapping);
    Rave.belongsTo(models.User, {foreignKey: "userId"});
    Rave.hasMany(models.Review, { foreignKey: 'raveId' });
    Rave.hasMany(models.Like, { foreignKey: 'raveId' });
  };
  return Rave;
};
