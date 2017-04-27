const path = require('path');
const sequelize = require('../db/connection');
const Sequelize = sequelize.Sequelize;

const User = require('./User');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');
const Pantry = require('./Pantry');
const Tag = require('./Tag');
const Item = require('./Item');
const RecipeTags = require('./RecipeTags');

Recipe.hasMany(Ingredient);
Recipe.belongsToMany(Tag, {through: RecipeTags});
Tag.belongsToMany(Recipe, {through: RecipeTags});
// Tag.belongsToMany(Item, {through: 'itemsTags'});
// Item.belongsToMany(Tag, {through: 'itemsTags'});
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
    RecipeTags,
    Ingredient,
  };
};
