'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'pantries', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' }, onDelete: 'cascade' },
      is_active: { type: Sequelize.BOOLEAN, allowNull: false, default: true},
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('pantries');
  }
};
