module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tag', {
    id: { type: Sequelize.INTEGER, autoIncrement: true },
    name: { type: DataTypes.STRING(50), allowNull: false, },
    is_global: { type: DataTypes.BOOLEAN, allowNull: false, defualt: false},
  }, {
      freezeTableName: true,
  });
};
