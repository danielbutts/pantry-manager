'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('tags', [
        { name: 'Spicy', isDefault: true, tagType: 'spiciness' },
        { name: 'Mild', isDefault: true, tagType: 'spiciness' },
        { name: 'Medium', isDefault: true, tagType: 'spiciness' },
        { name: 'Easy', isDefault: true, tagType: 'difficulty' },
        { name: 'Difficult', isDefault: true, tagType: 'difficulty' },
        { name: 'Appetizer', isDefault: true, tagType: 'course' },
        { name: 'Entre', isDefault: true, tagType: 'course' },
        { name: 'Desert', isDefault: true, tagType: 'course' },
        { name: 'Breakfast', isDefault: true, tagType: 'meal' },
        { name: 'Lunch', isDefault: true, tagType: 'meal' },
        { name: 'Dinner', isDefault: true, tagType: 'meal' },
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('Tags')
    ];
  }
};
