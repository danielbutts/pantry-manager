const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('recipes', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: { type: 'TIMESTAMP', allowNull: false, },
    updatedAt: { type: 'TIMESTAMP', allowNull: false, },
    user_id: { type: DataTypes.INTEGER, references: {
      model: 'User',
      key: 'id',
      deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }},
    title: { type: DataTypes.STRING(100), allowNull: false, },
    url: { type: DataTypes.TEXT, allowNull: false, },
    site_rating: { type: DataTypes.INTEGER, allowNull: true, },
    description: { type: DataTypes.TEXT, allowNull: false, },
    comment: { type: DataTypes.TEXT, allowNull: true, },
    user_rating: { type: DataTypes.INTEGER, allowNull: true, },
  }, {
      freezeTableName: true,
  });
};
