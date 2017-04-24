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

router.post('/', (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  const error = { status: 400 };

  if (!email || !email.trim()) {
    error.message = 'Email must not be blank';
    next(error);
    res.send(error);
  } else if (!first_name || !first_name.trim()) {
    error.message = 'First Name must not be blank';
    next(error);
    res.send(error);
  } else if (!last_name || !last_name.trim()) {
    error.message = 'Last Name must not be blank';
    next(error);
    res.send(error);
  } else if (!password || password.length < 8) {
    error.message = 'Password must be at least 8 chars long';
    next(error);
    res.send(error);
  }

  models.User.findOne({ where: { email } })
  .then((user) => {
    if (user) {
      error.message = 'Email already exists';
      next(error);
      res.send(error);
    } else {
      models.User.upsert({
        first_name,
        last_name,
        email,
        password,
      }).then((newUser) => {
        res.send(newUser);
      });
    }
  }).catch((err) => {
    next(err);
    console.error(err);
  });
});

module.exports = router;
