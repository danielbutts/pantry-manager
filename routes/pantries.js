const express = require('express');
// const sequelize = require('../db/connection');
// const models = require('../models')(sequelize);

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const userFirstName = req.session.firstName;
  let error;

  res.render('pages/pantry', { error, userFirstName })
});

module.exports = router;
