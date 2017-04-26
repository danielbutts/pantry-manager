const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Pantry Weasel', error: '' });
});

router.get('/new-user', (req, res) => {
  res.render('pages/new-user', { title: 'Pantry Weasel', error: '' });
});

module.exports = router;
