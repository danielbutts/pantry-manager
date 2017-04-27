const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const currentUser = {
    firstName: req.session.firstName,
    userId: req.session.userId,
  };
  let error;

  models.Item.findAll({ where: { pantryId: id } })
  .then((results) => {
    const pantryItems = [];
    results.forEach(instance => {
      pantryItems.push(instance.dataValues.name);
    });
    currentUser.pantryItems = pantryItems;
    res.render('pages/pantry', { error, currentUser });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
