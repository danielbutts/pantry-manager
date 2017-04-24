'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('users', [
        { first_name: 'Sean', last_name: 'McDermott', email: 'mcderm.sean@gmail.com', password: '', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { first_name: 'Daniel', last_name: 'Butts', email: 'daniel.butts@gmail.com', password: '', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('Users')
    ];
  }
};
