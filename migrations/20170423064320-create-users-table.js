'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'users', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      first_name: { type: Sequelize.STRING(50), allowNull: false, },
      last_name: { type: Sequelize.STRING(50), allowNull: false, },
      email: { type: Sequelize.STRING(100), allowNull: false, },
      password: { type: Sequelize.STRING(60), allowNull: false, },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
