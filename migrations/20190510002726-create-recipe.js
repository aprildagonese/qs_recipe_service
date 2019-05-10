'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingredient: {
        allowNull: false,
        type: Sequelize.STRING
      },
      label: {
        allowNull: false,
        type: Sequelize.STRING
      },
      recipe_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      health_labels: {
        type: Sequelize.STRING
      },
      calories: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      prep_time: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ingred_count: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};
