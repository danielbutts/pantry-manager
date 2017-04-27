const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const Recipe = sequelize.define('recipes', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  title: { type: Sequelize.DataTypes.STRING(100), allowNull: false, },
  url: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  siteRating: { type: Sequelize.DataTypes.INTEGER, allowNull: true, },
  description: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  comment: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  userRating: { type: Sequelize.DataTypes.INTEGER, allowNull: true, },
  prepTime: { type: Sequelize.INTEGER, allowNull: true },
  recipeText: { type: Sequelize.TEXT, allowNull: true },
  recipeId: { type: Sequelize.STRING(255), allowNull: false, unique: true },
  imageUrl: { type: Sequelize.TEXT, allowNull: false },
}, {
    freezeTableName: true,
});

module.exports = Recipe;
