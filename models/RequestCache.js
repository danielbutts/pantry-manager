const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const RequestCache = sequelize.define('requestCache', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  searchTerm: { type: Sequelize.DataTypes.STRING(50), allowNull: false},
}, {
  freezeTableName: true,
});

module.exports = RequestCache;
