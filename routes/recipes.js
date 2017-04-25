const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);
// const moment = require('moment');
const rp = require('request-promise');

const router = express.Router();

/* GET distinct items (to populate an items dropdown). */
router.get('/', (req, res, next) => {
  const ingredients = req.query.ingredients.split(',');
  const baseUrl = process.env.API_URL;
  const apiId = process.env.API_ID;
  const apiKey = process.env.API_KEY;
  // http://api.yummly.com/v1/api/recipes?_app_id=763aca63&_app_key=5d6cfc3b41400c18246cdfca347322d7&param%5B%5D=tuna

  const queries = [];
  ingredients.forEach((el) => {
    const ingredient = el.trim();

    queries.push(rp({ uri: `${baseUrl}_app_id=${apiId}&_app_key=${apiKey}&q${ingredient}`, json: true }));
  });

  Promise.all(queries).then((results) => {
    console.log(results);
  })
  .catch((err) => {
    next(err);
  });
});
