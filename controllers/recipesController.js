const Recipe = require('../models').Recipe
const pry = require('pryjs');
const fetch = require('node-fetch');

const create = async (req, res) => {
  try {
    const response = await fetch(`https://api.edamam.com/search?q=${req.body.ingredient}&app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&from=0&to=10`);
    const data = await response.json();

    let recipes = await data.hits.map(recipe => {
      const newRecipe = Recipe.create({
          ingredient: req.body.ingredient,
          label: recipe.recipe.label,
          recipe_url: recipe.recipe.url,
          health_labels: JSON.stringify(recipe.recipe.healthLabels),
          calories: recipe.recipe.calories,
          prep_time: recipe.recipe.totalTime,
          ingred_count: recipe.recipe.ingredients.length
        });
      return newRecipe;
    });
    recipes = await Promise.all(recipes)
    res.setHeader("Content-Type", "application/json");
    res.status(201).send(JSON.stringify(recipes))
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({error})
  }
}

module.exports = {
  create
}
