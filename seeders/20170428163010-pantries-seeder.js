'use strict';

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
