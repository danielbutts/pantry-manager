'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'pantries', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      user_id: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' }, onDelete: 'cascade' },
      is_active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('pantries');
  }
};
