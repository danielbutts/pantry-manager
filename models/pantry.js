const path = require('path');
const sequelize = require('../db/connection');
const User = importModel(sequelize, './user')
const Item = importModel(sequelize, './item')

function importModel(sequelize, importPath) {
  return sequelize.import(path.resolve(__dirname, importPath));
}

module.exports = (sequelize, DataTypes) => {
  const Pantry = sequelize.define('pantries', {
    createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
  }, {
    freezeTableName: true,
  });
  Pantry.hasMany(User, {as: 'Owners'})
  Pantry.hasMany(Item, {as: 'Contents'})
  return Pantry;
};
