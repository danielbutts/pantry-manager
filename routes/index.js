const express = require('express');

const router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
  const userFirstName = req.session.firstName;
  res.render('pages/index', { title: 'Pantry Weasel', error: '', userFirstName });
});

router.get('/new-user', (req, res) => {
  const userFirstName = req.session.firstName;
  res.render('pages/new-user', { title: 'Pantry Weasel', error: '', userFirstName });
});

module.exports = router;
