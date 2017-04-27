const express = require('express');
// const sequelize = require('../db/connection');
// const models = require('../models')(sequelize);

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => {
  res.send('pantry route works');
});

module.exports = router;
