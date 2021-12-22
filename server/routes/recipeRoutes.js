const router = require("express").Router();

const {
  addRecipe,
  listRecipes,
  listWeeksRecipes,
  listPrevRecipes,
} = require("../controllers/recipeController");

router.post("/:id", addRecipe);

router.get("/:id", listRecipes);

router.get("/:id/mealplan", listWeeksRecipes);

router.get("/:id/past", listPrevRecipes);

module.exports = router;
