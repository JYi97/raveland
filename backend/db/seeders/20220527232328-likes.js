'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Likes', [{
      userId: 3,
      raveId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Likes', null, {});
  }
};
