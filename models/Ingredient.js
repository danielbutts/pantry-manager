const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const Ingredient = sequelize.define('ingredients', {
  name: { type: Sequelize.DataTypes.STRING(50), allowNull: false },
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
}, {
  freezeTableName: true,
});

module.exports = Ingredient;
