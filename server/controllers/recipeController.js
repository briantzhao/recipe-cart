const recipes = require("../models/recipeModel");

exports.addRecipe = (req, res) => {
  //TODO: post recipe to recipe DB
  //post recipe to mealplan DB if needed
};

exports.listRecipes = (req, res) => {
  //TODO: get recipes from recipe DB
};

exports.listWeeksRecipes = (req, res) => {
  //TODO: get array of meals planned for the week
};

exports.listPrevRecipes = (req, res) => {
  //TODO: get array of meals planned for last week
};
