module.exports = (sequelize, DataTypes) => {
  return sequelize.define('recipe', {
    id: { type: Sequelize.INTEGER, autoIncrement: true },
    pantry_id: { type: Sequelize.INTEGER, references: {
      model: Pantry,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }},
    expire_date: { type: DataTypes.TIMESTAMP, allowNull: false, },
    percent_used: { type: DataTypes.FLOAT, allowNull: false, default: 0},
    quantity: { type: DataTypes.INTEGER, allowNull: false, default: 1},
    units: { type: DataTypes.STRING(50), allowNull: true, },
  }, {
    freezeTableName: true,
  });
};
