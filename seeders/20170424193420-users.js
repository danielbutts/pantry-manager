'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkInsert('users', [
        { firstName: 'Sean', lastName: 'McDermott', email: 'mcderm.sean@gmail.com', password: '$2a$12$tQGRIJgjiLJWBquXAgsCG.2TBZKWAPX57dfxKMpMmiyGaWBuuTCx2', pantryId: 1 },
        { firstName: 'Daniel', lastName: 'Butts', email: 'daniel.butts@gmail.com', password: '$2a$12$tQGRIJgjiLJWBquXAgsCG.2TBZKWAPX57dfxKMpMmiyGaWBuuTCx2', pantryId: 2 },
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.bulkDelete('Users')
    ];
  }
};
