const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const Pantry = sequelize.define('pantries', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  isActive: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
}, {
  freezeTableName: true,
});

module.exports = Pantry;
