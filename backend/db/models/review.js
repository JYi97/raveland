'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    raveId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    images: DataTypes.TEXT
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Rave, { foreignKey: "raveId" })
    Review.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Review;
};
