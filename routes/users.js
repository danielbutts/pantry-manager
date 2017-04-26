const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);
const bcrypt = require('bcrypt-as-promised');

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
    res.render('pages/dashboard', { title: 'Pantry Weasel' });
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/', (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const error = { status: 400 };

  if (!email || !email.trim()) {
    error.message = 'Email must not be blank';
    next(error);
    res.send(error);
  } else if (!firstName || !firstName.trim()) {
    error.message = 'First Name must not be blank';
    next(error);
    res.send(error);
  } else if (!lastName || !lastName.trim()) {
    error.message = 'Last Name must not be blank';
    next(error);
    res.send(error);
  } else if (!password || password.length < 8) {
    error.message = 'Password must be at least 8 chars long';
    next(error);
    res.send(error);
  }

  models.User.findOne({ where: { email } })
  .then((result) => {
    if (result) {
      error.message = 'Email already exists';
      next(error);
      res.send(error);
    }
  }).catch((err) => {
    next(err);
  });

  bcrypt.hash(password, 12)
  .then(hashedPassword =>
    models.Pantry.create({})
    .then((pantry) => {
      const pantryId = pantry.id;
      return models.User.create({ firstName, lastName, email, password: hashedPassword, pantryId });
    }) // eslint-disable-line comma-dangle
  )
  .then((user) => {
    const newUser = user;
    delete newUser.dataValues.password;
    res.json(newUser);
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
