var db = require("../models");

// If we can incorporate handlebars, we will need the below code
// var express = require("express");
// var router = express.Router();

module.exports = function(app) {
  //Not sure if we are going to need a 'get' or anything. Putting here, just in case.
  app.get("/api/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  //I am thinking we can use this if we put some type of input box, for searching for a specific country for example.
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};