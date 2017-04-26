const express = require('express');
const bcrypt = require('bcrypt-as-promised');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);

// eslint-disable-next-line new-cap
const router = express.Router();

const checkSession = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    const unauthorized = {
      status: 401,
      message: 'Unauthorized',
    };
    next(unauthorized);
  }
};

const deleteSession = (req, res) => {
  req.session = null;
  res.redirect('/');
};

const getSession = (req, res) => {
  const userId = req.session.userId;

  let error;
  res.render('pages/login', { error, userId });
};

const setSession = (req, res, next) => {
  const { email, password } = req.body;
  const error = { status: 400 };
  const userId = req.session.userId;

  if (!email || !email.trim()) {
    error.message = 'Email must not be blank';
    res.render('pages/login', { error, userId });
  }

  if (!password) {
    error.message = 'Password must not be blank';
    res.render('pages/login', { error, userId });
  }

  let user;

  models.User.findOne({ where: { email } })
    .then((userEmail) => {
      if (!userEmail) {
        error.message = 'Bad email or password';
        res.render('pages/login', { error, userId });
      }
      user = userEmail.dataValues;
      return bcrypt.compare(password, user.password);
    })
    .then(() => {
      delete user.password;

      req.session.userId = user.id;
      res.redirect(`/users/${user.id}`);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      error.message = 'Bad email or password';
      res.render('pages/login', { error, userId });
    })
    .catch((err) => {
      next(err);
    });
};

router.get('/', getSession);
router.post('/', setSession);
router.get('/logout', deleteSession);

module.exports = { router, checkSession };
