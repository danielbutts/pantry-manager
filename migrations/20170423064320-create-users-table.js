'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'users', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      firstName: { type: Sequelize.STRING(50), allowNull: false, },
      lastName: { type: Sequelize.STRING(50), allowNull: false, },
      email: { type: Sequelize.STRING(100), allowNull: false, },
      password: { type: Sequelize.STRING(60), allowNull: false, },
      pantryId: { type: Sequelize.INTEGER, allowNull: false }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
