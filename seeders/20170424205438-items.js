'use strict';

const moment = require('moment');

const later = moment().add(5, 'days').format();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('items', [
        { pantry_id: 1, name: 'Celery', quantity: 3, percent_used: 0, units: 'cup', expire_date: later},
        { pantry_id: 1, name: 'Chicken', quantity: 1, percent_used: 0, units: 'lb', expire_date: later},
        { pantry_id: 1, name: 'Onion', quantity: 2, percent_used: 0, expire_date: later},
        { pantry_id: 1, name: 'Carrots', quantity: 2, percent_used: 0, units: 'lb', expire_date: later},
        { pantry_id: 2, name: 'Apples', quantity: 1, percent_used: 0, units: 'lb', expire_date: later},
        { pantry_id: 2, name: 'Bread', quantity: 1, percent_used: 0, units: 'loaf', expire_date: later},
        { pantry_id: 2, name: 'Butter', quantity: 3, percent_used: 0, units: 'stick', expire_date: later},
        { pantry_id: 2, name: 'Apples', quantity: 1, percent_used: 0, units: 'lb', expire_date: later},
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('items')
    ];
  }
};
