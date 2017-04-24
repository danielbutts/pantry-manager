'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('tags', [
        { name: 'Spicy', is_default: true, type: 'spiciness' },
        { name: 'Mild', is_default: true, type: 'spiciness' },
        { name: 'Medium', is_default: true, type: 'spiciness' },
        { name: 'Easy', is_default: true, type: 'difficulty' },
        { name: 'Difficult', is_default: true, type: 'difficulty' },
        { name: 'Appetizer', is_default: true, type: 'course' },
        { name: 'Entre', is_default: true, type: 'course' },
        { name: 'Desert', is_default: true, type: 'course' },
        { name: 'Breakfast', is_default: true, type: 'meal' },
        { name: 'Lunch', is_default: true, type: 'meal' },
        { name: 'Dinner', is_default: true, type: 'meal' },
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('Tags')
    ];
  }
};
