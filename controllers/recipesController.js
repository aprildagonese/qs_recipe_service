const Recipe = require('../models').Recipe
const Key = require('../models').Key
const pry = require('pryjs');
const fetch = require('node-fetch');

const create = async (req, res) => {
  try {
    const key = await Key.findOne({
      where: {
        key: req.body.key
      }
    });

    if (key) {
      const response = await fetch(`https://api.edamam.com/search?q=${req.body.ingredient}&app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&from=0&to=10`);
      const data = await response.json();

      let recipes = await data.hits.map(recipe => {
        const newRecipe = Recipe.findOrCreate({
          where: {
            ingredient: req.body.ingredient,
            label: recipe.recipe.label,
            recipe_url: recipe.recipe.shareAs,
            health_labels: JSON.stringify(recipe.recipe.healthLabels),
            calories: recipe.recipe.calories,
            prep_time: recipe.recipe.totalTime,
            ingred_count: recipe.recipe.ingredients.length
          }
        });
      });
    };
    res.setHeader("Content-Type", "application/json");
    res.status(204).send();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(401).send({error});
  }
}

const index = async (req, res) => {
  try {
    const ingredient = sanitizeEntry(req.body.ingredient)
    const recipes = await Recipe.findAll({where: {ingredient: ingredient}, limit: 10})
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ingredient: `${req.body.ingredient}`, recipes: recipes}))
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({error})
  }
}

const sanitizeEntry = (userEntry) => {
  let entry = userEntry
  entry = entry.toLowerCase()
  entry = entry[0].toUpperCase() + entry.substring(1)
  return entry
}

module.exports = {
  create,index
}
