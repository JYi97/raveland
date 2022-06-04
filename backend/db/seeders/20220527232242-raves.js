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
      date: "2021-08-13",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Electric Daisy Carnival",
      image: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2022/02/01171129/EDCLV2021_1024_042113-7803_AGP_768x440.jpg",
      description: "The annual flagship event, EDC Las Vegas, is held in May at the Las Vegas Motor Speedway, and is currently the largest electronic dance music festival in North America.",
      address: "7000 N. Las Vegas Blvd",
      city: "Las Vegas",
      state: "NV",
      zipCode: "89115",
      date: "2022-05-20",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Hard Summer",
      image: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2018/01/11235133/ourworld2.jpg",
      description: "HARD Summer music festival comes to the NOS Events Center!",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: "2022-07-29",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Raves', null, {});

  }
};
