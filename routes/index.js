const express = require('express');
const sequelize = require('../db/connection');
const models = require('../models')(sequelize);
// const rp = require('request-promise');

if (process.env.NODE_ENV !== 'production' && !process.env.IS_BUILD) {
  require('dotenv').config(); // eslint-disable-line global-require
}
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  const currentUser = {
    firstName: req.session.firstName,
    userId: req.session.userId,
  };
  models.Recipe.findAll({
    limit: 4,
    order: [['createdAt', 'DESC']],
  })
  .then((recipeResults) => {
    const recipes = {};
    const ingredientQueries = [];

    recipeResults.forEach((recipeResult) => {
      const recipe = recipeResult.dataValues;
      // console.log(recipe);
      recipes[recipe.id] = recipe;
      ingredientQueries.push(recipeResult.getIngredients());
    });

    Promise.all(ingredientQueries)
    .then((ingredientsFromResults) => {
      ingredientsFromResults.forEach((ingredientsResults) => {
        // console.log(ingredientsResults);
        const ingredients = [];
        const recipeId = ingredientsResults[0].dataValues.recipeId;
        ingredientsResults.forEach((ingredientResult) => {
          ingredients.push(ingredientResult.dataValues.name);
        });
        recipes[recipeId].ingredients = ingredients;
      });
      // console.log(recipes);
      const recent = Object.values(recipes);

      res.render('pages/index', { title: 'Pantry Weasel', error: '', currentUser, recent });
    });
  })
  .catch((err) => {
    next(err);
  });
});

// function getRandomFromArray(arr, num) {
//   const times = arr.length > num ? num : arr.length;
//   const randArr = [];
//   const usedNums = [];
//   while (usedNums.length <= times) {
//     const index = Math.round(Math.random() * arr.length);
//     if (!usedNums.includes(index)) {
//       usedNums.push(index);
//       randArr.push(arr[index]);
//     }
//   }
//   console.log(randArr);
//   return randArr;
// }

router.get('/new-user', (req, res) => {
  const currentUser = {
    firstName: req.session.firstName,
    userId: req.session.userId,
  };
  res.render('pages/new-user', { title: 'Pantry Weasel', error: '', currentUser });
});

module.exports = router;
