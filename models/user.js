const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    firstName: { type: DataTypes.STRING(50), allowNull: false, },
    lastName: { type: DataTypes.STRING(50), allowNull: false, },
    email: { type: DataTypes.STRING(100), allowNull: false, },
    password: { type: DataTypes.STRING(60), allowNull: false, },
  }, {
      freezeTableName: true,
  });
};
