'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Raves', [{
      userId: 3,
      title: "Das Energi",
      image: "https://edmidentity.com/wp-content/uploads/2021/03/DasEnergi_Headliners_2021_2160x2160-1068x1068.jpg",
      description: "Das Energi Festival 2021 has Trance, House, EDM, Trap Music, Dubstep, and more at The Saltair in Salt Lake City! The Das Energi Festival lineup is out: Illenium, LSDream, Claude Von Stroke, Ganja White Night and Kaskade top the lineup.",
      address: "12408 W Saltair Dr",
      city: "Magna",
      state: "UT",
      zipCode: "84044",
      date: "August 13-14, 2021",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Raves', null, {});

  }
};
