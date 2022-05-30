'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [{
      userId: 3,
      raveId: 1,
      content: "Took my friend and her sister to their first rave and had a great experience. Parking was a pain but other than that, I would definitely go again.",
      images: "https://imgur.com/a/e7DFjFT",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
