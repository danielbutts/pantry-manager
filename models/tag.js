const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tags', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    name: { type: DataTypes.STRING(50), allowNull: false, },
    isGlobal: { type: DataTypes.BOOLEAN, allowNull: false, defualt: false},
  }, {
      freezeTableName: true,
  });
};
