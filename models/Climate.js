module.exports = function (sequelize, DataTypes) {
  var Climate = sequelize.define("Climate", {
    // Giving the Author model a name of type STRING
    // name: DataTypes.STRING,
    ISO3: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    precipitation: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    created_at: DataTypes.DATE
  }, {freezeTableName: true});

  // Author.associate = function (models) {
  //    Associating Author with Posts
  //    When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {onDelete: "cascade"});
  // };

  return Climate;
};
