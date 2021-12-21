const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");

router.post("/", (req, res) => {
  let ingredients = [];
  let recipe = [];
  let firstIn;
  const { url } = req.body;
  let tastyRegex = /https:\/\/(www\.)?tasty.co\/recipe\//;
  let seRegex = /https:\/\/(www\.)?seriouseats.com\//;
  let srRegex = /https:\/\/(www\.)?simplyrecipes.com\/recipes\//;
  if (!(tastyRegex.test(url) || seRegex.test(url) || srRegex.test(url))) {
    console.log("failed");
    res.status(400).json({
      Message:
        "Recipe not found. Only recipes from Tasty, SeriousEats, and SimplyRecipes are accepted.",
    });
    return;
  }
  axios
    .get(url)
    .then(({ data }) => {
      const $ = cheerio.load(data);
      $("[class^=ingredients_], [id*=ingredients]")
        .find("li")
        .each(function () {
          //   console.log("ingredients found");
          const text = $(this).text();
          //   console.log(text);
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
      $("[class*=preparation], [class*=instructions]")
        .find("ol li")
        .each(function () {
          let text = $(this).text();
          let allText = text.split(/\r?\n/);
          text = "";
          for (let i = 0; i < allText.length; i++) {
            let newLine = allText[i].trim();
            if (newLine) {
              //   console.log("newLine", newLine);
              if (newLine.charAt(0) === "<") {
                console.log("< found: ", newLine);
                break;
              }
              text = text + " " + newLine;
              continue;
            }
          }
          //   console.log("single text:  ", text);
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
      if (recipe.length === 0 || ingredients.length === 0) {
        console.log("bad page");
        res.status(400).json({ Message: "Error retrieving URL" });
        return;
      }
      res.status(200).json({ ingredients, recipe });
    })
    .catch((err) => {
      //   console.log(err);
      res.status(400).json({ Message: "Error retrieving URL" });
    });
});

module.exports = router;
