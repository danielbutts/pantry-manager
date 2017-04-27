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
  const max = 20;
  const userFirstName = req.session.firstName;
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
      const attributes = thing.attributes;
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

            // add course to tags
            if (attributes !== null) {
              console.log(attributes);
              Object.keys(attributes).forEach((attribute) => {
                console.log(attribute, attributes[attribute][0]);
                models.Tag.findOne({ where: {
                  name: attributes[attribute][0],
                  tagType: attribute } })
                .then((tagMatch) => {
                  if (tagMatch === null) { // new tag. save to database.
                    models.Tag.create({ name: attributes[attribute][0], tagType: attribute })
                    .then((insertedTag) => {
                      insertedRecipe.addTag(insertedTag).then();
                    });
                  }
                })
                .catch((err) => {
                  next(err);
                });
              });
            }

            // add flavors to tags
            if (flavors !== null) {
              Object.keys(flavors).forEach((flavor) => {
                models.Tag.findOne({ where: { name: flavor, tagType: 'flavor' } })
                .then((tagMatch) => {
                  if (tagMatch === null) { // new tag. save to database.
                    models.Tag.create({ name: flavor, tagType: 'flavor' })
                    .then((insertedTag) => {
                      insertedRecipe.addTag(insertedTag).then();
                    });
                  }
                })
                .catch((err) => {
                  next(err);
                });
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
        attributes,
        flavors,
      });
    });
    res.render('../views/pages/recipes', { recipes, userFirstName });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
