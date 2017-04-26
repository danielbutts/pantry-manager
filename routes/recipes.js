const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);
const rp = require('request-promise');

require('dotenv').config(); // eslint-disable-line global-require


const router = express.Router();

/* GET distinct items (to populate an items dropdown). */
router.get('/', (req, res, next) => {
  // const baseUrl = process.env.API_URL;
  // const apiId = process.env.API_ID;
  // const apiKey = process.env.API_KEY;
  const baseUrl = 'http://api.yummly.com/v1/api/recipes?';
  const apiId = '763aca63';
  const apiKey = '5d6cfc3b41400c18246cdfca347322d7';

  let searchTerms = req.query.ingredients.split(',');
  searchTerms = searchTerms.map(el => el.trim());

  const recipes = [];
  const apiQueries = [];

  searchTerms.forEach((term) => {
    apiQueries.push(rp({
      uri: `${baseUrl}_app_id=${apiId}&_app_key=${apiKey}&q=${term}`,
      json: true,
    }));
  });

  Promise.all(apiQueries)
  .then((apiResults) => {
    // TODO batch insert recipes into database (check for duplicates - upsert?)
    apiResults.forEach((apiResult) => {
      // const term = apiResult.criteria.q;
      const matches = apiResult.matches;

      matches.forEach((thing) => {
        const recipe = {};
        recipe.recipeName = thing.recipeName;
        recipe.ingredients = thing.ingredients;
        recipe.siteRating = thing.rating;
        recipe.imageUrl = thing.smallImageUrls;
        recipe.recipeId = thing.id;
        recipe.prepTime = thing.totalTimeInSeconds;
        console.log(recipe);
        recipes.push(recipe);
      });
    });
    // recipes.concat(parseSearchResult(apiResults));

    // TODO add recipes to template and render.
    res.render('../views/pages/recipes', { recipes });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;


// const cacheQueries = [];

// models.RequestCache.findAll({ plain: false })
// .then((results) => {
//   results.forEach((result) => {
//     const term = result.dataValues.searchTerm;
//     if (searchTerms.includes(term)) {
//       cacheQueries.push(term);
//     } else {
//       apiQueries.push(rp({
//         uri: `${baseUrl}_app_id=${apiId}&_app_key=${apiKey}&q=${term}`,
//         json: true,
//       }));
//     }
//   });

  // TODO query the database for terms in cacheQueries (and add to recipes)
