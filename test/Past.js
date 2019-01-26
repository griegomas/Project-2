

module.exports = function(sequelize, DataTypes) {
  var Past = sequelize.define("past", {
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
    ISO3past: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  return Past;
};