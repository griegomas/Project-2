// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var past = sequelize.define("past", {
  climateVar: {
    type: Sequelize.STRING
  },
  fromYear: {
    type: Sequelize.INTEGER
  },
  toYear: {
    type: Sequelize.INTEGER
  },
  annualData: {
    type: Sequelize.INTEGER
  }
  ISO3past: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});


var FUTURE = sequelize.define("FUTURE", {
  climateVar: {
    type: Sequelize.STRING
  },
  fromYear: {
    type: Sequelize.INTEGER
  },
  toYear: {
    type: Sequelize.INTEGER
  },
  annualData: {
    type: Sequelize.INTEGER
  }
  ISO3past: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
past.sync();
FUTURE.sync();

module.exports = past;
module.exports = FUTURE;