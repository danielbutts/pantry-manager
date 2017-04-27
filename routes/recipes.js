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
  const max = 1;
  const userId = req.session.userId;
  const term = req.query.ingredients;
  const recipes = [];

  rp({
    uri: `${baseUrl}_app_id=${apiId}&_app_key=${apiKey}&q=${term}&maxResult=${max}`,
    json: true,
  })
  .then((apiResult) => {
    // console.log(apiResult);
    const matches = apiResult.matches;

    matches.forEach((thing) => {
      console.log(thing);
      const title = thing.recipeName;
      const ingredients = thing.ingredients;
      const siteRating = parseInt(thing.rating, 10);
      let imageUrl;
      if (thing.smallImageUrls !== undefined) {
        imageUrl = thing.smallImageUrls[0];
      }
      const recipeId = thing.id;
      const prepTime = thing.totalTimeInSeconds;
      let course;
      if (thing.attributes.course !== undefined) {
        course = thing.attributes.course[0];
      }
      const flavors = thing.flavors;

      models.Recipe.findOne({ where: { recipeId } })
      .then((match) => {
        if (match === null) { // new recipe. save to database.
          models.Recipe.create({ title, siteRating, imageUrl, recipeId, prepTime })
          .then((insertedRecipe) => {
            const id = insertedRecipe.dataValues.id;

            // add recipes
            if (ingredients !== null && ingredients.length > 0) {
              ingredients.forEach((ingredient) => {
                models.Ingredient.create({ name: ingredient, recipeId: id }).then();
              });
            }

            // add tags

            if (course !== null) {
              console.log('course not null', course);
              models.Tag.findOne({ where: { name: course, tagType: 'course' } })
              .then((tagMatch) => {
                console.log('tagMatch', tagMatch);
                if (tagMatch === null) { // new tag. save to database.
                  console.log('tagMatch is null', course);
                  if (course !== undefined) {
                    models.Tag.create({ name: course, tagType: 'course' })
                    .then((insertedTag) => {
                      // const tagId = insertedTag.dataValues.id;
                      // models.RecipesTag.create({ recipeId: id, tagId }).then();
                      insertedRecipe.addTag(insertedTag).then((recipeTag) => {
                        console.log('HERE', recipeTag);
                      });
                    });
                  }
                }
              })
              .catch((err) => {
                console.log(err);
                next(err);
              });
            }
          });
        }
      });
      recipes.push({
        title,
        ingredients,
        siteRating,
        imageUrl,
        recipeId,
        prepTime,
        course,
        flavors,
      });
    });
    res.render('../views/pages/recipes', { recipes, userId });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
