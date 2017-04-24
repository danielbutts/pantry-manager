const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tags', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: { type: 'TIMESTAMP', allowNull: false, },
    updatedAt: { type: 'TIMESTAMP', allowNull: false, },
    name: { type: DataTypes.STRING(50), allowNull: false, },
    is_global: { type: DataTypes.BOOLEAN, allowNull: false, defualt: false},
  }, {
      freezeTableName: true,
  });
};
