const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const User = require('./User');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');
const Pantry = require('./Pantry');
const Tag = require('./Tag');
const Item = require('./Item');
const RequestCache = require('./RequestCache');

Recipe.hasMany(Ingredient);
Recipe.belongsToMany(Tag, {through: 'recipesTags'});
Tag.belongsToMany(Recipe, {through: 'recipesTags'});
Tag.belongsToMany(Item, {through: 'itemsTags'});
Item.belongsToMany(Tag, {through: 'itemsTags'});
Pantry.hasMany(User);
Pantry.hasMany(Item);

sequelize.sync();

module.exports = function getModels(sequelize) {
  return {
    User,
    Item,
    Pantry,
    Recipe,
    Tag,
    Ingredient,
    RequestCache,
  };
};
