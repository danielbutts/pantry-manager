const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const Item = sequelize.define('items', {
  name: { type: Sequelize.DataTypes.STRING(255), allowNull: false },
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  addDate: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  expireDate: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  percentUsed: { type: Sequelize.DataTypes.FLOAT, allowNull: false, defaultValue: 0},
  quantity: { type: Sequelize.DataTypes.INTEGER, allowNull: false, defaultValue: 1},
  units: { type: Sequelize.DataTypes.STRING(50), allowNull: true },
}, {
  freezeTableName: true,
});

module.exports = Item;
