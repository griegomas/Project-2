

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
