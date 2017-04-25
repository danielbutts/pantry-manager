const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('items', {
    name: { type: DataTypes.STRING(50), allowNull: false },
    createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    // quantity: { type: DataTypes.INTEGER, allowNull: false, default: 1},
    // units: { type: DataTypes.STRING(50), allowNull: true },
  }, {
    freezeTableName: true,
  });
};
