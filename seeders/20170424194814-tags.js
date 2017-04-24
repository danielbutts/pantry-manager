'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('tags', [
        { name: 'Spicy', is_default: true, type: 'spiciness', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Mild', is_default: true, type: 'spiciness', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Medium', is_default: true, type: 'spiciness', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Easy', is_default: true, type: 'difficulty', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Difficult', is_default: true, type: 'difficulty', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Appetizer', is_default: true, type: 'course', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Entre', is_default: true, type: 'course', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Desert', is_default: true, type: 'course', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Breakfast', is_default: true, type: 'meal', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Lunch', is_default: true, type: 'meal', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
        { name: 'Dinner', is_default: true, type: 'meal', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('Tags')
    ];
  }
};
