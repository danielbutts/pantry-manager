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

const Ingredient = sequelize.define('ingredients', {
  name: { type: Sequelize.DataTypes.STRING(50), allowNull: false },
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
}, {
  freezeTableName: true,
});

const Recipe = sequelize.define('recipes', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  title: { type: Sequelize.DataTypes.STRING(100), allowNull: false, },
  url: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  siteRating: { type: Sequelize.DataTypes.INTEGER, allowNull: true, },
  description: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  comment: { type: Sequelize.DataTypes.TEXT, allowNull: true, },
  userRating: { type: Sequelize.DataTypes.INTEGER, allowNull: true, },
  prepTime: { type: Sequelize.INTEGER, allowNull: true },
  recipeText: { type: Sequelize.TEXT, allowNull: true },
  recipeId: { type: Sequelize.STRING(255), allowNull: false, unique: true },
  imageUrl: { type: Sequelize.TEXT, allowNull: false },
}, {
    freezeTableName: true,
});
Recipe.hasMany(Ingredient)

const Tag = sequelize.define('tags', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  name: { type: Sequelize.DataTypes.STRING(50), allowNull: false, },
  isDefault: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false, defualt: false},
}, {
    freezeTableName: true,
});

Recipe.belongsToMany(Tag, {through: 'recipesTags'})
Tag.belongsToMany(Recipe, {through: 'recipesTags'})

const Item = sequelize.define('items', {
  name: { type: Sequelize.DataTypes.STRING(50), allowNull: false },
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  addDate: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  expireDate: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  percentUsed: { type: Sequelize.DataTypes.FLOAT, allowNull: false, default: 0},
  quantity: { type: Sequelize.DataTypes.INTEGER, allowNull: false, default: 1},
  units: { type: Sequelize.DataTypes.STRING(50), allowNull: true },
}, {
  freezeTableName: true,
});
Tag.belongsToMany(Item, {through: 'itemsTags'})
Item.belongsToMany(Tag, {through: 'itemsTags'})

const Pantry = sequelize.define('pantries', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  isActive: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
}, {
  freezeTableName: true,
});
Pantry.hasMany(User)
Pantry.hasMany(Item)

const RequestCache = sequelize.define('requestCache', {
  createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  searchTerm: { type: Sequelize.DataTypes.STRING(50), allowNull: false},
}, {
  freezeTableName: true,
});

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
