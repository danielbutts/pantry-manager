const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);
const moment = require('moment');

const router = express.Router();

/* GET distinct items (to populate an items dropdown). */
router.get('/names', (req, res, next) => {
  models.Item.aggregate('name', 'DISTINCT', { plain: false })
  .then((results) => {
    const names = results.map(el => el.DISTINCT);
    res.status(200).json(names);
  })
  .catch((err) => {
    next(err);
  });
});

function displayDate(date) {
  return moment(date).format('ddd MMMM Do');
}

router.get('/pantry/:id', (req, res, next) => {
  const title = 'Pantry Contents';
  const id = req.params.id;
  models.Item.findAll({ where: { pantryId: id } })
  .then((results) => {
    results[0].getTags()
    .then((tags) => {
      console.log(tags);
      const items = results.map((el) => {
        const item = el.dataValues;
        item.createdAt = displayDate(item.createdAt);
        item.expireDate = displayDate(item.expireDate);
        if (item.units !== null && item.quantity > 1) {
          item.units += 's';
        }
        return item;
      });
      console.log(items);
      res.render('pages/items', { items, title });
    });
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/:id', (req, res, next) => {
  const title = 'Edit Item';
  const id = req.params.id;
  models.Item.findOne({ where: { id } })
  .then((result) => {
    const item = result.dataValues;
    item.createdAt = displayDate(item.createdAt);
    item.expireDate = displayDate(item.expireDate);
    res.render('pages/edit-item', { item, title });
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/', (req, res, next) => {
  const { pantryId, addDate, expireDate, quantity, units, percentUsed } = req.body;
  return models.Item.create({
    pantryId,
    addDate,
    expireDate,
    quantity,
    units,
    percentUsed,
  }).then((item) => {
    res.status(200).json(item);
  })
  .catch((err) => {
    next(err);
  });
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const { pantryId, addDate, expireDate, quantity, units, percentUsed } = req.body;
  return models.Item.update({
    pantryId,
    addDate,
    expireDate,
    quantity,
    units,
    percentUsed,
  }, {
    where: { id },
    returning: true,
    plain: true,
  }).then((result) => {
    res.status(200).json(result[1]);
  })
  .catch((err) => {
    next(err);
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  return models.Item.delete({
    where: { id },
    cascade: true,
  }).then((result) => {
    res.status(200).json(result[1]);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
