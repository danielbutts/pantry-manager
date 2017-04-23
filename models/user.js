module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    id: { type: Sequelize.INTEGER, autoIncrement: true },
    first_name: { type: DataTypes.STRING(50), allowNull: false, },
    last_name: { type: DataTypes.STRING(50), allowNull: false, },
    email: { type: DataTypes.STRING(100), allowNull: false, },
    password: { type: DataTypes.STRING(60), allowNull: false, },
  }, {
      freezeTableName: true,
  });
};
