const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('recipe', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: { type: 'TIMESTAMP', allowNull: false, },
    updatedAt: { type: 'TIMESTAMP', allowNull: false, },
    pantry_id: { type: DataTypes.INTEGER, references: {
      model: 'Pantry',
      key: 'id',
      deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }},
    expire_date: { type: 'TIMESTAMP', allowNull: false, },
    percent_used: { type: DataTypes.FLOAT, allowNull: false, default: 0},
    quantity: { type: DataTypes.INTEGER, allowNull: false, default: 1},
    units: { type: DataTypes.STRING(50), allowNull: true, },
  }, {
    freezeTableName: true,
  });
};
