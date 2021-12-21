const router = require("express").Router();

router.post("/:id", (req, res) => {
  //TODO: post recipe to recipe DB
  //post recipe to mealplan DB if needed
});

router.get("/:id", (req, res) => {
  //TODO: get recipes from recipe DB
});

router.get("/:id/mealplan", (req, res) => {
  //TODO: get array of meals planned for the week
});

router.get("/:id/past", (req, res) => {
  //TODO: get array of meals planned for last week
});

module.exports = router;
