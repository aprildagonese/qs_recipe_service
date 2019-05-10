'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    ingredient: DataTypes.STRING,
    label: DataTypes.STRING,
    recipe_url: DataTypes.STRING,
    health_labels: DataTypes.STRING,
    calories: DataTypes.FLOAT,
    prep_time: DataTypes.INTEGER,
    ingred_count: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};