'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'recipes', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      // userId: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' }, onDelete: 'cascade' },
      title: { type: Sequelize.STRING(100), allowNull: false, },
      recipeUrl: { type: Sequelize.TEXT, allowNull: true },
      siteRating: { type: Sequelize.INTEGER, allowNull: true },
      description: { type: Sequelize.TEXT, allowNull: true },
      // comment: { type: Sequelize.TEXT, allowNull: true },
      // userRating: { type: Sequelize.INTEGER, allowNull: true },
      // isFavorite: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
      imageUrl: { type: Sequelize.TEXT, allowNull: false, },
      prepTime: { type: Sequelize.INTEGER, allowNull: true },
      recipeText: { type: Sequelize.TEXT, allowNull: true },
      recipeId: { type: Sequelize.STRING(255), allowNull: false, unique: true },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('recipes');
  }
};
