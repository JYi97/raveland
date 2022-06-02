'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [{
      userId: 3,
      raveId: 1,
      content: "Took my friend and her sister to their first rave and had a great experience. Parking was a pain but other than that, I would definitely go again.",
      image: "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1Mzg0NzM5MDc3NzYwNDY2/dasenergy1.png",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
