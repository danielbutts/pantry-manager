module.exports = (sequelize, DataTypes) => {
  return sequelize.define('pantry', {
    id: { type: Sequelize.INTEGER, autoIncrement: true },
    user_id: { type: Sequelize.INTEGER, references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }},
    is_active: { type: DataTypes.BOOLEAN, allowNull: false, default: true},
  }, {
    freezeTableName: true,
  });
};
