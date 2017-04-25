const searchResult = require('./yummlyApiTestResponse');
// const getResult = require('./yummlyRecipeGetTest');

function parseSearchResult(result) {
  const matches = result.matches;
  const recipeArray = [];
  matches.forEach((el) => {
    const { recipeName, ingredients } = el;
    const siteRating = el.rating;
    const imageUrl = el.smallImageUrls;
    const apiId = el.id;
    const prepTime = el.totalTimeInSeconds;
    return recipeArray.push({ recipeName, ingredients, siteRating, imageUrl, apiId, prepTime });
  });
  return recipeArray;
}

console.log(parseSearchResult(searchResult));
