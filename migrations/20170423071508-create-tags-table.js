'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'tags', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      createdAt: { type: 'TIMESTAMP', allowNull: false, },
      updatedAt: { type: 'TIMESTAMP', allowNull: false, },
      name: { type: Sequelize.STRING(50), allowNull: false, },
      is_default: { type: Sequelize.BOOLEAN, allowNull: false, defualt: false},
      type: { type: Sequelize.STRING(50), allowNull: true},
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tags');
  }
};
