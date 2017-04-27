const express = require('express');

const router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
  const currentUser = {
    firstName: req.session.firstName,
    userId: req.session.userId,
  };
  res.render('pages/index', { title: 'Pantry Weasel', error: '', currentUser });
});

router.get('/new-user', (req, res) => {
  const currentUser = {
    firstName: req.session.firstName,
    userId: req.session.userId,
  };
  res.render('pages/new-user', { title: 'Pantry Weasel', error: '', currentUser });
});

module.exports = router;
