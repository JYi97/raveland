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
  };
  return Rave;
};