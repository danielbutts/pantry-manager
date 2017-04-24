// const bcrypt = require('bcrypt-as-promised');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.userId !== undefined) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
});

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !email.trim()) {
    next({
      status: 400,
      message: 'Email must not be blank',
    });
    res.send('need a email');
  }

  if (!password) {
    next({
      status: 400,
      message: 'Password must not be blank',
    });
    res.send('need a password');
  }
});

module.exports = router;
