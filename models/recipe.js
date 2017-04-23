module.exports = (sequelize, DataTypes) => {
  return sequelize.define('recipe', {
    id: { type: Sequelize.INTEGER, autoIncrement: true },
    user_id: { type: Sequelize.INTEGER, references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
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
