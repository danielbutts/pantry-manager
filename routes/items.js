const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);

const router = express.Router();

/* GET distinct items (to populate an items dropdown). */
router.get('/names', (req, res, next) => {
  models.Item.aggregate('name', 'DISTINCT', { plain: false })
  .then((names) => {
    res.status(200).json(names);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/', (req, res, next) => {
  models.Item.findAll()
  .then((items) => {
    res.status(200).json(items);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  models.Item.findOne({ where: { id } })
  .then((item) => {
    res.status(200).json(item);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
