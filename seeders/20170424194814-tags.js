'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('tags', [
        { name: 'Spicy', isDefault: true, type: 'spiciness' },
        { name: 'Mild', isDefault: true, type: 'spiciness' },
        { name: 'Medium', isDefault: true, type: 'spiciness' },
        { name: 'Easy', isDefault: true, type: 'difficulty' },
        { name: 'Difficult', isDefault: true, type: 'difficulty' },
        { name: 'Appetizer', isDefault: true, type: 'course' },
        { name: 'Entre', isDefault: true, type: 'course' },
        { name: 'Desert', isDefault: true, type: 'course' },
        { name: 'Breakfast', isDefault: true, type: 'meal' },
        { name: 'Lunch', isDefault: true, type: 'meal' },
        { name: 'Dinner', isDefault: true, type: 'meal' },
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('Tags')
    ];
  }
};
