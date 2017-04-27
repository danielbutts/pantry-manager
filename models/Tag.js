const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const Tag = sequelize.define('tags', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  name: { type: Sequelize.DataTypes.STRING(50), allowNull: false, },
  isDefault: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false, defualt: false},
}, {
    freezeTableName: true,
});

module.exports = Tag;
