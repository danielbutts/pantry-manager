'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'ingredients', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING(255), allowNull: false },
      createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      recipeId: { type: Sequelize.INTEGER, references: { model: 'recipes', key: 'id' }, onDelete: 'cascade' },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('ingredients');
  }
};
