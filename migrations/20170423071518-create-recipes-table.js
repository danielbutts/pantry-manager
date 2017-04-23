'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'recipes', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' }, onDelete: 'cascade' },
      title: { type: Sequelize.STRING(100), allowNull: false, },
      url: { type: Sequelize.TEXT, allowNull: false, },
      site_rating: { type: Sequelize.INTEGER, allowNull: true, },
      description: { type: Sequelize.TEXT, allowNull: false, },
      comment: { type: Sequelize.TEXT, allowNull: true, },
      user_rating: { type: Sequelize.INTEGER, allowNull: true, },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('recipes');
  }
};
