'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'recipesTags', {
      // id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      recipesId: { type: Sequelize.INTEGER, references: { model: 'recipes', key: 'id' }, onDelete: 'cascade' },
      tagId: { type: Sequelize.INTEGER, references: { model: 'tags', key: 'id' }, onDelete: 'cascade' }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('recipesTags');
  }
};
