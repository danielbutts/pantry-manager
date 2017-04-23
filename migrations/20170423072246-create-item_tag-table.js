'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'item_tag', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      item_id: { type: Sequelize.INTEGER, references: { model: 'items', key: 'id' }, onDelete: 'cascade' },
      tag_id: { type: Sequelize.INTEGER, references: { model: 'tags', key: 'id' }, onDelete: 'cascade' }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('item_tag');
  }
};
