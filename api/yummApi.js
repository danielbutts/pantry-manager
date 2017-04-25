const searchResult = require('./yummlyApiTestResponse');
// const getResult = require('./yummlyRecipeGetTest');

function parseSearchResult(result) {
  const matches = result.matches;
  const recipeArray = [];
  matches.forEach((recipe) => {
    const { recipeName, ingredients } = recipe;
    const siteRating = recipe.rating;
    const imageUrl = recipe.smallImageUrls;
    const apiId = recipe.id;
    const prepTime = recipe.totalTimeInSeconds;
    return recipeArray.push({ recipeName, ingredients, siteRating, imageUrl, apiId, prepTime });
  });
  return recipeArray;
}

console.log(parseSearchResult(searchResult));
