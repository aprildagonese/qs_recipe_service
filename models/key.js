'use strict';
module.exports = (sequelize, DataTypes) => {
  const Key = sequelize.define('Key', {
    email: DataTypes.STRING,
    key: DataTypes.STRING
  }, {});
  Key.associate = function(models) {
    // associations can be defined here
  };
  return Key;
};