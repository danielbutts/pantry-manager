'use strict';

const moment = require('moment');

const later = moment().add(5, 'days').format();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('items', [
        { pantryId: 1, name: 'Celery', quantity: 3, percentUsed: 0, units: 'cup', addDate: moment().format(), expireDate: later},
        { pantryId: 1, name: 'Chicken', quantity: 1, percentUsed: 0, units: 'lb', addDate: moment().format(), expireDate: later},
        { pantryId: 1, name: 'Onion', quantity: 2, percentUsed: 0, addDate: moment().format(), expireDate: later},
        { pantryId: 1, name: 'Carrots', quantity: 2, percentUsed: 0, units: 'lb', addDate: moment().format(), expireDate: later},
        { pantryId: 2, name: 'Apples', quantity: 1, percentUsed: 0, units: 'lb', addDate: moment().format(), expireDate: later},
        { pantryId: 2, name: 'Bread', quantity: 1, percentUsed: 0, units: 'loaf', addDate: moment().format(), expireDate: later},
        { pantryId: 2, name: 'Butter', quantity: 3, percentUsed: 0, units: 'stick', addDate: moment().format(), expireDate: later},
        { pantryId: 2, name: 'Apples', quantity: 1, percentUsed: 0, units: 'lb', addDate: moment().format(), expireDate: later},
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('items')
    ];
  }
};
