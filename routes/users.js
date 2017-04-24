const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  models.User.findAll().then((users) => {
    users.forEach((user) => {
      console.log(user);
    });
    res.send('respond with a resource', { users });
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});

module.exports = router;
