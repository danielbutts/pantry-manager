'use strict';

const moment = require('moment');
const now = moment();
const later = moment().add(5, 'days');

console.log(now);
console.log(later);

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('pantries', [
        { isActive: true },
        { isActive: true },
      ]),
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('pantries')
    ];
  }
};
