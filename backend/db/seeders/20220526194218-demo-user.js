'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'jyi@ucsb.edu',
        username: 'JYi97',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'weiqi@ucsb.edu',
        username: 'matchaluver123',
        hashedPassword: bcrypt.hashSync('matcha')
      },
      {
        email: 'chrisc@aa.io',
        username: 'ChicagoBoi',
        hashedPassword: bcrypt.hashSync('dance')
      },
      {
        email: 'chrish@aa.io',
        username: 'HogerChris',
        hashedPassword: bcrypt.hashSync('valorant')
      },
      {
        email: 'grace@aa.io',
        username: 'ProductiveGraceee',
        hashedPassword: bcrypt.hashSync('matcha')
      },
      {
        email: 'ashley@ucsb.edu',
        username: 'KilluaFanGirl',
        hashedPassword: bcrypt.hashSync('hunter')
      },
      {
        email: 'maria@ucsb.edu',
        username: 'Illenium4Ever',
        hashedPassword: bcrypt.hashSync('illenium')
      },
      {
        email: 'aubrey@byu.edu',
        username: 'Aubzz',
        hashedPassword: bcrypt.hashSync('utah')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'justinyi', 'matchaluver123', 'ChicagoBoi', 'HogerChris', 'ProductiveGraceee', 'KilluaFanGirl', 'Illenium4Ever', 'Aubzz'] }
    }, {});
  }
};
