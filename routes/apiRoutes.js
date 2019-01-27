var db = require("../models");
var axios = require("axios");

// If we can incorporate handlebars, we will need the below code
// var express = require("express");
// var router = express.Router();

module.exports = function (app) {
  //Not sure if we are going to need a 'get' or anything. Putting here, just in case.
  app.get("/api/", function (req, res) {
    db.Climate.findAll({}).then(function (information) {
      res.json(information);
    });
  });

  app.get("/api/climate/:ISO3", function (req, res) {
    var queryURL = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/" + req.params.ISO3;
    axios.get(queryURL).then(function (response) {
      // console.log(response.data);
      res.json(response.data);
    });
  });

  app.get("/api/pr/:ISO3", function (req, res) {
    var queryURL = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/pr/year/" + req.params.ISO3;
    axios.get(queryURL).then(function (response) {
      res.json(response.data);
    });
  });
  // Add a book
  app.post("/api/new", function (req, res) {
    console.log("Climate data: ");
    console.log(req.body);
    db.Climate.create({ISO3: req.body.ISO3, year: req.body.year, temperature: req.body.temperature}).then(function (results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/delete", function (req, res) {
    db.Climate.destroy({
      where: {}
    })
  });
};
