const express = require('express');
// const sequelize = require('../db/connection');
// const models = require('../models')(sequelize);

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const currentUser = {
    firstName: req.session.firstName,
    userId: req.session.userId,
  };
  let error;

  res.render('pages/pantry', { error, currentUser })
});

module.exports = router;
