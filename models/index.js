var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
const {
  convertIocCode,
  convertIso2Code,
  convertIso3Code
} = require("convert-country-codes");
console.log(convertIso2Code("BR"));
console.log(convertIso2Code("US"));

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

exports.convertIocCode = function(iocCode) {
  return icoCountries[iocCode];
};

exports.convertIso2Code = function(iso2Code) {
  return iso2Countries[iso2Code];
};

exports.convertIso3Code = function(iso3Code) {
  return iso3Countries[iso3Code];
};

module.exports = db;
