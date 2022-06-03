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
    },
    {
      userId: 1,
      raveId: 2,
      content: "Under the Electric Sky, we come together to celebrate life, love, art, and music.",
      image: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/13120224/EDC-hero-image-972x486.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      raveId: 3,
      content: "The festival will take place rain or shine.",
      image: "https://media.timeout.com/images/105889121/750/422/image.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
