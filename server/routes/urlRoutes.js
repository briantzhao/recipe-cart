const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");

router.post("/", (req, res) => {
  let ingredients = [];
  let recipe = [];
  let firstIn;
  const { url } = req.body;
  console.log(url);
  axios
    .get(url)
    .then(({ data }) => {
      console.log(data);
      const $ = cheerio.load(data);
      $(".ingredient").each(function () {
        const text = $(this).text();
        console.log(text);
        if (ingredients.length === 0) {
          firstIn = text;
        } else {
          if (text === firstIn) {
            return false;
          }
        }
        ingredients.push(text);
      });

      //   $(".prep-steps li").each(function () {
      $("ol li").each(function () {
        const text = $(this).text();
        if (recipe.length === 0) {
          firstIn = text;
        } else {
          if (text === firstIn) {
            return false;
          }
        }
        recipe.push(text);
      });
      console.log("ingredients: ", ingredients);
      console.log("recipe: ", recipe);
      if (recipe.length > 20) {
        res.status(400).json({ Message: "Error retrieving URL" });
      }
      res.status(200).json({ ingredients, recipe });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ Message: "Error retrieving URL" });
    });
});

module.exports = router;
