'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'items', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, },
      updatedAt: { type: 'TIMESTAMP', allowNull: false, },
      pantry_id: { type: Sequelize.INTEGER, references: { model: 'pantries', key: 'id' }, onDelete: 'cascade' },
      expire_date: { type: Sequelize.DATE, allowNull: false, },
      percent_used: { type: Sequelize.FLOAT, allowNull: false, default: 0},
      quantity: { type: Sequelize.INTEGER, allowNull: false, default: 1},
      units: { type: Sequelize.STRING(50), allowNull: true, },
      is_favorite: { type: Sequelize.BOOLEAN, allowNull: false, defualt: false},
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('items');
  }
};
