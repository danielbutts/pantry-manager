const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  models.User.findAll().then((users) => {
    res.status(200).json(users);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  models.User.findOne({ where: { id } })
  .then((user) => {
    res.send('respond with a resource', { user });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
