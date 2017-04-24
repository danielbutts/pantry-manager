const path = require('path');
const sequelize = require('../db/connection');

function importModel(sequelize, importPath) {
  return sequelize.import(path.resolve(__dirname, importPath));
}

module.exports = function getModels(sequelize) {
  return {
    User: importModel(sequelize, './user'),
    Item: importModel(sequelize, './item'),
    Pantry: importModel(sequelize, './pantry'),
    Recipe: importModel(sequelize, './recipe'),
    Tag: importModel(sequelize, './tag'),
  };
};
