const sequelize = require('../db/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('pantries', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: { type: 'TIMESTAMP', allowNull: false, },
    updatedAt: { type: 'TIMESTAMP', allowNull: false, },
    user_id: { type: DataTypes.INTEGER, references: {
      model: 'user',
      key: 'id',
      deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }},
    is_active: { type: DataTypes.BOOLEAN, allowNull: false, default: true},
  }, {
    freezeTableName: true,
  });
};
