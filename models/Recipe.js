const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const Recipe = sequelize.define('recipes', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  title: { type: Sequelize.DataTypes.STRING(100), allowNull: false, },
  recipeUrl: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  siteRating: { type: Sequelize.DataTypes.INTEGER, allowNull: true, },
  description: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  // comment: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  // userRating: { type: Sequelize.DataTypes.INTEGER, allowNull: true, },
  prepTime: { type: Sequelize.DataTypes.INTEGER, allowNull: true },
  recipeText: { type: Sequelize.DataTypes.TEXT, allowNull: true },
  recipeId: { type: Sequelize.DataTypes.STRING(255), allowNull: false, unique: true },
  imageUrl: { type: Sequelize.DataTypes.TEXT, allowNull: false },
  isFavorite: { type: Sequelize.DataTypes.BOOLEAN, allowNull: true, defaultValue: false },

}, {
    freezeTableName: true,
});

module.exports = Recipe;
