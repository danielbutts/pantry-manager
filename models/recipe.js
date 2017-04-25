const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('recipes', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    userId: { type: DataTypes.INTEGER, references: {
      model: 'User',
      key: 'id',
      deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }},
    title: { type: DataTypes.STRING(100), allowNull: false, },
    url: { type: DataTypes.TEXT, allowNull: false, },
    siteRating: { type: DataTypes.INTEGER, allowNull: true, },
    description: { type: DataTypes.TEXT, allowNull: false, },
    comment: { type: DataTypes.TEXT, allowNull: true, },
    userRating: { type: DataTypes.INTEGER, allowNull: true, },
  }, {
      freezeTableName: true,
  });
};
