// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Future = sequelize.define("past", {
    climateVar: {
      type: DataTypes.STRING
    },
    fromYear: {
      type: DataTypes.INTEGER
    },
    toYear: {
      type: DataTypes.INTEGER
    },
    annualData: {
      type: DataTypes.INTEGER
    },
    ISO3future: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  return Future;
};
