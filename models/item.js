const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('items', {
    name: { type: DataTypes.STRING(50), allowNull: false },
    createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    addDate: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    expireDate: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    percentUsed: { type: DataTypes.FLOAT, allowNull: false, default: 0},
    quantity: { type: DataTypes.INTEGER, allowNull: false, default: 1},
    units: { type: DataTypes.STRING(50), allowNull: true },
  }, {
    freezeTableName: true,
  });
};
