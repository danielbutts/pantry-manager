'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'recipe_tag', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, },
      updatedAt: { type: 'TIMESTAMP', allowNull: false, },
      recipes_id: { type: Sequelize.INTEGER, references: { model: 'recipes', key: 'id' }, onDelete: 'cascade' },
      tag_id: { type: Sequelize.INTEGER, references: { model: 'tags', key: 'id' }, onDelete: 'cascade' }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('recipe_tag');
  }
};
