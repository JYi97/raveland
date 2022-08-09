'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rave = sequelize.define('Rave', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    photoUrl: DataTypes.TEXT,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Rave.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "Like",
      otherKey: "userId",
      foreignKey: "raveId",
      as: "likes"
    }
    Rave.belongsToMany(models.User, columnMapping);
    Rave.belongsTo(models.User, { foreignKey: "userId" });
    Rave.hasMany(models.Review, { foreignKey: 'raveId', onDelete: "CASCADE", hooks: true });
    Rave.hasMany(models.Like, { foreignKey: 'raveId' });
  };
  return Rave;
};
