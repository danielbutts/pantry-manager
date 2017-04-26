const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);
const rp = require('request-promise');

if (process.env.NODE_ENV !== 'production' && !process.env.IS_BUILD) {
  require('dotenv').config(); // eslint-disable-line global-require
}
const router = express.Router();

/* GET distinct items (to populate an items dropdown). */
router.get('/', (req, res, next) => {
  const baseUrl = process.env.API_URL;
  const apiId = process.env.API_ID;
  const apiKey = process.env.API_KEY;
  const max = 5;

  const term = req.query.ingredients;
  // let searchTerms = req.query.ingredients.split(',');
  // searchTerms = searchTerms.map(el => el.trim());

  const apiQueries = [];

  // searchTerms.forEach((term) => {
  apiQueries.push(rp({
    uri: `${baseUrl}_app_id=${apiId}&_app_key=${apiKey}&q=${term}&maxResult=${max}`,
    json: true,
  }));
  // });

  Promise.all(apiQueries)
  .then((apiResults) => {
    const recipes = [];
    // TODO batch insert recipes into database (check for duplicates - upsert?)
    apiResults.forEach((apiResult) => {
      // const term = apiResult.criteria.q;
      const matches = apiResult.matches;

      matches.forEach((thing) => {
        const recipe = {};
        recipe.title = thing.recipeName;
        recipe.ingredients = thing.ingredients;
        recipe.siteRating = parseInt(thing.rating, 10);
        recipe.imageUrl = thing.smallImageUrls[0];
        recipe.recipeId = thing.id;
        recipe.prepTime = thing.totalTimeInSeconds;
        // console.log(recipe);
        recipes.push(recipe);
      });
    });
    res.render('../views/pages/recipes', { recipes });
    return recipes;
  })
  .then((recipes) => {
    // insert recipes into cache
    const queries = [];
    recipes.forEach((recipe) => {
      const { title, ingredients, siteRating, imageUrl, recipeId, prepTime } = recipe;
      console.log(imageUrl);
      queries.push(models.Recipe.upsert({
        title,
        ingredients,
        siteRating,
        imageUrl,
        recipeId,
        prepTime }));
    });
    Promise.all(queries).then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
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
