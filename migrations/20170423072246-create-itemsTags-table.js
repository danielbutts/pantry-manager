'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
    'itemsTags', {
      createdAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: 'TIMESTAMP', allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      itemId: { type: Sequelize.INTEGER, references: { model: 'items', key: 'id' }, onDelete: 'cascade' },
      tagId: { type: Sequelize.INTEGER, references: { model: 'tags', key: 'id' }, onDelete: 'cascade' }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('itemsTags');
  }
};
