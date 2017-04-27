const express = require('express');

const router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
  const userId = req.session.userId;
  res.render('pages/index', { title: 'Pantry Weasel', error: '', userId });
});

router.get('/new-user', (req, res) => {
  const userId = req.session.userId;
  res.render('pages/new-user', { title: 'Pantry Weasel', error: '', userId });
});

module.exports = router;
