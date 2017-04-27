const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const RecipeTags = sequelize.define('recipeTags', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  recipeId: { type: Sequelize.INTEGER, references: { model: 'recipes', key: 'id' }, onDelete: 'cascade' },
  tagId: { type: Sequelize.INTEGER, references: { model: 'tags', key: 'id' }, onDelete: 'cascade' }
}, {
    freezeTableName: true,
});

module.exports = RecipeTags;
