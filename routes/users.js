const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);
const bcrypt = require('bcrypt-as-promised');
const checkSession = require('./session').checkSession;
const pantries = require('./pantries');

const router = express.Router();

const addNewUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const error = { status: 400 };
  const userFirstName = req.session.firstName;


  if (!email || !email.trim()) {
    error.message = 'Email must not be blank';
    res.render('pages/new-user', { error, userFirstName });
  } else if (!firstName || !firstName.trim()) {
    error.message = 'First Name must not be blank';
    res.render('pages/new-user', { error, userFirstName });
  } else if (!lastName || !lastName.trim()) {
    error.message = 'Last Name must not be blank';
    res.render('pages/new-user', { error, userFirstName });
  } else if (!password || password.length < 8) {
    error.message = 'Password must be at least 8 chars long';
    res.render('pages/new-user', { error, userFirstName });
  } else {
    models.User.findOne({ where: { email } })
    .then((result) => {
      if (!result) {
        bcrypt.hash(password, 12)
        .then(hashedPassword =>
          models.Pantry.create({})
          .then((pantry) => {
            const pantryId = pantry.id;
            return models.User.create(
              { firstName, lastName, email, password: hashedPassword, pantryId });
          }) // eslint-disable-line comma-dangle
        )
        .then((user) => {
          const newUser = user;
          delete newUser.dataValues.password;
          req.session.userId = newUser.id;
          req.session.firstName = user.firstName;
          res.redirect(`/users/${newUser.id}`);
        });
      } else {
        error.message = 'Email already exists';
        res.render('pages/new-user', { error, userFirstName });
      }
    }).catch((err) => {
      next(err);
    });
  }
};


const getUserDashboard = (req, res, next) => {
  const id = req.params.id;
  const userFirstName = req.session.firstName;
  models.User.findOne({ where: { id } })
  .then(() => {
    res.render('pages/dashboard', { title: 'Pantry Weasel', userFirstName });
  })
  .catch((err) => {
    next(err);
  });
};

router.post('/', addNewUser);
router.use(checkSession);
router.get('/:id', getUserDashboard);
router.use('/:id/pantries', pantries);

module.exports = router;
