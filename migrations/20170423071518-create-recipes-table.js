'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'recipes', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      userId: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' }, onDelete: 'cascade' },
      title: { type: Sequelize.STRING(100), allowNull: false, },
      recipeUrl: { type: Sequelize.TEXT, allowNull: false, },
      siteRating: { type: Sequelize.INTEGER, allowNull: true, },
      description: { type: Sequelize.TEXT, allowNull: false, },
      comment: { type: Sequelize.TEXT, allowNull: true, },
      userRating: { type: Sequelize.INTEGER, allowNull: true, },
      isFavorite: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
      imageUrl: { type: Sequelize.TEXT, allowNull: false, },
      apiId: { type: Sequelize.STRING(1000), allowNull: false, },
      prepTime: { type: Sequelize.STRING(100), allowNull: false, },
      recipeText: { type: Sequelize.TEXT, allowNull: false, },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('recipes');
  }
};
