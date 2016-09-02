'use strict';

function addIngredient(recipeHash, ingredient, quantity) {
  recipeHash[ingredient] = quantity;
  return recipeHash
}

function removeIngredient(recipe, ingredient) {
  delete recipe[ingredient]
  return recipe;
}

function updateIngredient(recipe, ingredient, quantity) {
  recipe[ingredient] = quantity
  return recipe;
}

function readRecipe(recipeHash) {
  for (var key in recipeHash){
    console.log("this recipe calls for " + recipeHash[key] + " of " + key);
  }
}
