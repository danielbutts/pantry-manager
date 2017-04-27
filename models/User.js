const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const User = sequelize.define('users', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  firstName: { type: Sequelize.DataTypes.STRING(50), allowNull: false, },
  lastName: { type: Sequelize.DataTypes.STRING(50), allowNull: false, },
  email: { type: Sequelize.DataTypes.STRING(100), allowNull: false, },
  password: { type: Sequelize.DataTypes.STRING(60), allowNull: false, },
}, {
    freezeTableName: true,
});

module.exports = User;
