const express = require('express');
const bcrypt = require('bcrypt-as-promised');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);

// eslint-disable-next-line new-cap
const router = express.Router();

const deleteSession = (req, res) => {
  req.session = null;
  res.status(200).json(true);
};

const getSession = (req, res) => {
  if (req.session.userId) {
    res.json(true);
  } else {
    res.json(false);
  }
};

const setSession = (req, res, next) => {
  const { email, password } = req.body;
  const error = { status: 400 };

  if (!email || !email.trim()) {
    error.message = 'Email must not be blank';
    next(error);
  }

  if (!password) {
    error.message = 'Password must not be blank';
    next(error);
  }

  let user;

  models.User.findOne({ where: { email } })
    .then((userEmail) => {
      if (!userEmail) {
        error.message = 'Bad email or password';
        next(error);
        res.json(error);
      }
      user = userEmail.dataValues;
      return bcrypt.compare(password, user.password);
    })
    .then(() => {
      delete user.password;

      res.json(user);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      error.message = 'Password must not be blank';
      next(error);
      res.send(error);
    })
    .catch((err) => {
      next(err);
    });
};

router.get('/', getSession);
router.post('/', setSession);
router.delete('/', deleteSession);

module.exports = router;
