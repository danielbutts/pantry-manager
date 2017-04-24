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
        { user_id: 1, is_active: true },
        { user_id: 2, is_active: true },
      ]),
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('pantries')
    ];
  }
};
